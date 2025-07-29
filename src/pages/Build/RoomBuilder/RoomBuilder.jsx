import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FurniturePalette } from "./FurniturePalette/FurniturePalette";
import { RoomGrid } from "./RoomGrid/RoomGrid";
import { ManagementPanel } from "./ManagmentPanel/ManagmentPanel";
import { BuilderContainer } from "./styles/RoomBuilder.styled";

export const RoomBuilder = () => {
  const [furniture, setFurniture] = useState([]);
  const [floorTheme, setFloorTheme] = useState("light");
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedPaletteItem, setSelectedPaletteItem] = useState(null);
  const [mode, setMode] = useState("add");

 const handleSelectItem = (item) => {
    if (mode === 'add') {
      setSelectedPaletteItem(item);
    }
  };

  const handleCellClick = (x, y) => {
    if (mode === 'move' && selectedItem) {
      setFurniture(furniture.map(item => 
        item.id === selectedItem.id ? { ...item, x, y, isNew: false } : item
      ));
      setSelectedItem(null);
      setMode('add');
    } else if (mode === 'add' && selectedPaletteItem) {
      const newFurniture = {
        id: Date.now(),
        type: selectedPaletteItem.id,
        x,
        y,
        color: "#4DB6AC",
        component: selectedPaletteItem.component,
        rotation: 0,
        isNew: true
      };
      setFurniture([...furniture, newFurniture]);
      setSelectedPaletteItem(null);
      
      setTimeout(() => {
        setFurniture(prev => prev.map(f => 
          f.id === newFurniture.id ? { ...f, isNew: false } : f
        ));
      }, 2000);
    }
  };

  const handleDeleteItem = (id) => {
    setFurniture(furniture.filter(item => item.id !== id));
    if (selectedItem?.id === id) {
      setSelectedItem(null);
    }
  };

  const handleRotateFurniture = (id, degrees) => {
    setFurniture(furniture.map(item => {
      if (item.id === id) {
        const newRotation = (item.rotation + degrees) % 360;
        return { ...item, rotation: newRotation };
      }
      return item;
    }));
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