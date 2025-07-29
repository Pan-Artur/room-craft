import { useDrop } from 'react-dnd';
import { FurnitureItem } from './FurnitureItem';

import { GridContainer, GridCell } from './RoomGrid.styled';

export const RoomGrid = ({ furniture, onMoveFurniture, floorTheme }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'FURNITURE',
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const gridX = Math.floor(offset.x / 60);
      const gridY = Math.floor(offset.y / 60);
      onMoveFurniture(item.id, gridX, gridY);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const floorTextures = {
    light: { color: '#F5F5F5', grid: '#E0E0E0' },
    dark: { color: '#616161', grid: '#424242' },
    wood: { color: '#D7CCC8', grid: '#BCAAA4' },
    tile: { color: '#FFFFFF', grid: '#E0E0E0' }
  };

  const currentFloor = floorTextures[floorTheme] || floorTextures.light;

  return (
    <GridContainer 
      ref={drop}
      $isOver={isOver}
      $floorColor={currentFloor.color}
      $gridColor={currentFloor.grid}
    >
      {Array.from({ length: 8 }).map((_, row) => (
        Array.from({ length: 8 }).map((_, col) => (
          <GridCell key={`${row}-${col}`} />
        ))
      ))}
      
      {furniture.map((item) => (
        <FurnitureItem
          key={item.id}
          id={item.id}
          type={item.type}
          x={item.x}
          y={item.y}
          color={item.color}
        />
      ))}
    </GridContainer>
  );
};