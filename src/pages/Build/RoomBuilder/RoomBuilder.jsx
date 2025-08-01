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
    case "chair":
      size = { cols: 1, rows: 1 };
      break;
    case "desk":
      size = { cols: 2, rows: 1 };
      break;
    case "wardrobe":
      size = { cols: 2, rows: 3 };
      break;
    case "shelf":
      size = { cols: 1, rows: 2 };
      break;
    case "pc":
      size = { cols: 1, rows: 1 };
      break;
    case "plant":
      size = { cols: 1, rows: 1 };
      break;
    case "rug":
      size = { cols: 3, rows: 2 };
      break;
    case "beanbag":
      size = { cols: 1, rows: 1 };
      break;
    case "wheel":
      size = { cols: 1, rows: 1 };
      break;
    case "arcade":
      size = { cols: 1, rows: 1 };
      break;
    default:
      size = { cols: 1, rows: 1 };
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

  const canPlaceFurniture = (x, y, type, furnitureList = [], rotation = 0) => {
    const { cols, rows } = getFurnitureSize(type, rotation);

    if (x + cols > 10 || y + rows > 10) return false;

    for (let furniture of furnitureList) {
      const { cols: fCols, rows: fRows } = getFurnitureSize(
        furniture.type,
        furniture.rotation || 0
      );

      const x2 = furniture.x;
      const y2 = furniture.y;

      if (x < x2 + fCols && x + cols > x2 && y < y2 + fRows && y + rows > y2) {
        return false;
      }
    }

    return true;
  };

  const handleCellClick = useCallback(
    (x, y) => {
      if (mode === "move" && selectedItem) {
        const size = getFurnitureSize(selectedItem.type, selectedItem.rotation);
        if (x + size.cols > 6 || y + size.rows > 6) {
          return;
        }

        if (
          canPlaceFurniture(
            x,
            y,
            selectedItem.type,
            furniture.filter((item) => item.id !== selectedItem.id),
            selectedItem.rotation
          )
        ) {
          setFurniture(
            furniture.map((item) =>
              item.id === selectedItem.id ? { ...item, x, y } : item
            )
          );
          setSelectedItem(null);
        }
      } else if (mode === "add" && selectedPaletteItem) {
        const size = getFurnitureSize(selectedPaletteItem.id, 0);
        if (x + size.cols > 6 || y + size.rows > 6) {
          return;
        }

        if (canPlaceFurniture(x, y, selectedPaletteItem.id, furniture, 0)) {
          const newFurniture = {
            id: Date.now(),
            type: selectedPaletteItem.id,
            x,
            y,
            component: selectedPaletteItem.component,
            rotation: 0,
            name: selectedPaletteItem.name,
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

  const handleRotateFurniture = (id, angle) => {
    setFurniture((prevFurniture) =>
      prevFurniture.map((item) => {
        if (item.id === id) {
          const newRotation = (item.rotation + angle) % 360;
          const canRotate = canPlaceFurniture(
            item.x,
            item.y,
            item.type,
            prevFurniture.filter((f) => f.id !== id),
            newRotation
          );

          return canRotate ? { ...item, rotation: newRotation } : item;
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
