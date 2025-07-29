import { useDrop } from 'react-dnd';
import { GridContainer, GridCell } from './styles/RoomGrid.styled';

export const RoomGrid = ({ 
  furniture, 
  onMoveFurniture, 
  floorTheme,
  onRotateFurniture
}) => {
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
      {Array.from({ length: 6 }).map((_, row) => (
        Array.from({ length: 6 }).map((_, col) => (
          <GridCell key={`${row}-${col}`} />
        ))
      ))}
      
      {furniture.map((item) => (
        <GridCell
          key={item.id}
          $x={item.x}
          $y={item.y}
          $rotation={item.rotation || 0}
          $isNew={item.isNew}
          color={item.color}
          onClick={() => onRotateFurniture(item.id, 90)}
          onDoubleClick={() => onRotateFurniture(item.id, 360)}
        >
          {item.component}
        </GridCell>
      ))}
    </GridContainer>
  );
};