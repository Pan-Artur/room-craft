import { useDrop } from 'react-dnd';
import { GridContainer, GridCell, GridCoordinates } from './styles/RoomGrid.styled';

export const RoomGrid = ({ 
  furniture, 
  onRotateFurniture,
  floorTheme,
  onCellClick,
  selectedItem,
  mode,
  onDelete,
  setSelectedItem
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'FURNITURE',
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      if (!offset) return;
      
      const gridElement = document.getElementById('room-grid');
      const gridRect = gridElement.getBoundingClientRect();
      
      const cellSize = gridRect.width / 6;
      const gridX = Math.min(5, Math.max(0, Math.floor((offset.x - gridRect.left) / cellSize)));
      const gridY = Math.min(5, Math.max(0, Math.floor((offset.y - gridRect.top) / cellSize)));
      
      onCellClick(gridX, gridY);
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

  const handleItemClick = (e, item) => {
    e.stopPropagation();
    if (mode === 'delete') {
      onDelete(item.id);
    } else {
      setSelectedItem(item);
    }
  };

  return (
    <GridContainer 
      id="room-grid"
      ref={drop}
      $isOver={isOver}
      $floorColor={currentFloor.color}
      $gridColor={currentFloor.grid}
    >
      {Array.from({ length: 6 }).map((_, row) => (
        Array.from({ length: 6 }).map((_, col) => (
          <GridCell 
            key={`${row}-${col}`}
            onClick={() => onCellClick(col, row)}
          >
            <GridCoordinates>{col},{row}</GridCoordinates>
          </GridCell>
        ))
      ))}
      
      {furniture.map((item) => (
        <div
          key={item.id}
          style={{
            gridColumn: item.x + 1,
            gridRow: item.y + 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
            transform: `rotate(${item.rotation}deg)`,
            transition: 'transform 0.3s ease',
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
          }}
        >
          <div
            onClick={(e) => handleItemClick(e, item)}
            onDoubleClick={(e) => {
              e.stopPropagation();
              onRotateFurniture(item.id, 90);
            }}
            style={{
              width: '70%',
              height: '70%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              pointerEvents: 'auto',
              outline: selectedItem?.id === item.id ? '2px solid #4DB6AC' : 'none',
              borderRadius: '4px'
            }}
          >
            {item.component}
          </div>
          <GridCoordinates>{item.x},{item.y}</GridCoordinates>
        </div>
      ))}
    </GridContainer>
  );
};