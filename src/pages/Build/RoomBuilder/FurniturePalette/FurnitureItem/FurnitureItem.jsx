import styled from 'styled-components';
import { useDrag } from 'react-dnd';

export const FurnitureItemContainer = styled.div`
  position: absolute;
  left: ${props => props.$x * 60}px;
  top: ${props => props.$y * 60}px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: move;
  z-index: 1;
  transform: rotate(${props => props.$rotation}deg);
  transition: transform 0.3s ease;
  opacity: ${props => props.$isNew ? 0.5 : 1};
`;

export const FurnitureItem = ({ 
  id, 
  type, 
  x, 
  y, 
  color, 
  rotation, 
  isNew,
  onClick,
  onRotate 
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FURNITURE',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <FurnitureItemContainer
      ref={drag}
      $x={x}
      $y={y}
      $rotation={rotation}
      $isNew={isNew}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onDoubleClick={onRotate}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {type === 'bed' && <div style={{ color, fontSize: '30px' }}>🛏️</div>}
      {type === 'sofa' && <div style={{ color, fontSize: '30px' }}>🛋️</div>}
      {type === 'chair' && <div style={{ color, fontSize: '30px' }}>🪑</div>}
      {type === 'table' && <div style={{ color, fontSize: '30px' }}>🪑</div>}
    </FurnitureItemContainer>
  );
};