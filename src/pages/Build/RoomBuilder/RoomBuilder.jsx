import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FurniturePalette } from "./FurniturePalette/FurniturePalette";
import { RoomGrid } from "./RoomGrid/RoomGrid";
import { RoomGridContainer } from "./RoomGrid/styles/RoomGrid.styled";

export const RoomBuilder = () => {
  const [furniture, setFurniture] = useState([]);
  const [floorTheme] = useState("light");

  const handleSelectItem = (item) => {
    const newFurniture = {
      id: Date.now(),
      type: item.id,
      x: 3,
      y: 3,
      color: "#4DB6AC",
      component: item.component,
      rotation: 0,
      isNew: true,
    };
    setFurniture([...furniture, newFurniture]);

    setTimeout(() => {
      setFurniture((prev) =>
        prev.map((f) => (f.id === newFurniture.id ? { ...f, isNew: false } : f))
      );
    }, 5000);
  };

  const handleMoveFurniture = (id, x, y) => {
    setFurniture(
      furniture.map((item) =>
        item.id === id ? { ...item, x, y, isNew: false } : item
      )
    );
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
      <FurniturePalette onSelectItem={handleSelectItem} />
      <RoomGridContainer>
        <RoomGrid
          furniture={furniture}
          onMoveFurniture={handleMoveFurniture}
          onRotateFurniture={handleRotateFurniture}
          floorTheme={floorTheme}
        />
      </RoomGridContainer>
    </DndProvider>
  );
};
