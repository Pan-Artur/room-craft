import { useState, useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FurniturePalette } from "./FurniturePalette/FurniturePalette";
import { RoomGrid } from "./RoomGrid/RoomGrid";
import { ManagementPanel } from "./ManagmentPanel/ManagmentPanel";
import { BuilderContainer } from "./styles/RoomBuilder.styled";

const getFurnitureSize = (type, rotation = 0) => {
  let size = { cols: 1, rows: 1 };

  switch (type) {
    case "bed":
      size = { cols: 3, rows: 2 };
      break;
    case "sofa":
      size = { cols: 2, rows: 1 };
      break;
  }

  if (rotation % 180 !== 0) {
    return { cols: size.rows, rows: size.cols };
  }

  return size;
};

export const RoomBuilder = () => {
  const [furniture, setFurniture] = useState([]);
  const [floorTheme, setFloorTheme] = useState("light");
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedPaletteItem, setSelectedPaletteItem] = useState(null);
  const [mode, setMode] = useState("add");

  const handleSelectItem = (item) => {
    if (mode === "add") {
      setSelectedPaletteItem(item);
    }
  };

  const canPlaceFurniture = useCallback((x, y, type, rotation = 0) => {
      const size = getFurnitureSize(type, rotation);
      const cols =
        size.gridColumn === "span 3" ? 3 : size.gridColumn === "span 2" ? 2 : 1;
      const rows = size.gridRow === "span 2" ? 2 : 1;

      if (x + cols > 6 || y + rows > 6) return false;

      return !furniture.some((item) => {
        const itemSize = getFurnitureSize(item.type);
        const itemCols =
          itemSize.gridColumn === "span 3"
            ? 3
            : itemSize.gridColumn === "span 2"
            ? 2
            : 1;
        const itemRows = itemSize.gridRow === "span 2" ? 2 : 1;

        return (
          x < item.x + itemCols &&
          x + cols > item.x &&
          y < item.y + itemRows &&
          y + rows > item.y
        );
      });
    },
    [furniture]
  );

  const handleCellClick = useCallback(
    (x, y) => {
      if (mode === "move" && selectedItem) {
        if (canPlaceFurniture(x, y, selectedItem.type, selectedItem.rotation)) {
          setFurniture(
            furniture.map((item) =>
              item.id === selectedItem.id ? { ...item, x, y } : item
            )
          );
          setSelectedItem(null);
        }
      } else if (mode === "add" && selectedPaletteItem) {
        if (canPlaceFurniture(x, y, selectedPaletteItem.type, 0)) {
          const newFurniture = {
            id: Date.now(),
            type: selectedPaletteItem.id,
            x,
            y,
            component: selectedPaletteItem.component,
            rotation: 0,
          };
          setFurniture([...furniture, newFurniture]);
        }
      }
    },
    [furniture, mode, selectedItem, selectedPaletteItem, canPlaceFurniture]
  );

  const handleDeleteItem = (id) => {
    setFurniture(furniture.filter((item) => item.id !== id));
    if (selectedItem?.id === id) {
      setSelectedItem(null);
    }
  };

  const handleRotateFurniture = (id, degrees) => {
    setFurniture(
      furniture.map((item) => {
        if (item.id === id) {
          const newRotation = (item.rotation + degrees) % 360;
          return { ...item, rotation: newRotation };
        }
        return item;
      })
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <BuilderContainer>
        <FurniturePalette
          onSelectItem={handleSelectItem}
          selectedItem={selectedItem}
          mode={mode}
        />

        <RoomGrid
          furniture={furniture}
          onRotateFurniture={handleRotateFurniture}
          floorTheme={floorTheme}
          onCellClick={handleCellClick}
          selectedItem={selectedItem}
          mode={mode}
          onDelete={handleDeleteItem}
          setSelectedItem={setSelectedItem}
        />

        <ManagementPanel
          mode={mode}
          setMode={setMode}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          onDelete={handleDeleteItem}
          floorTheme={floorTheme}
          setFloorTheme={setFloorTheme}
        />
      </BuilderContainer>
    </DndProvider>
  );
};
