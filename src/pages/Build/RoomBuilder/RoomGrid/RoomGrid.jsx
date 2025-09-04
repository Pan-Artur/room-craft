import { useDrop } from "react-dnd";
import {
  GridContainer,
  GridCell,
  StyledElement,
} from "./styles/RoomGrid.styled";
import { useCallback, useRef, useMemo } from "react";

const GRID_SIZE = 6;

const FURNITURE_BASE_SIZES = {
  bed: { cols: 3, rows: 2 },
  sofa: { cols: 2, rows: 1 },
  default: { cols: 1, rows: 1 },
};

const FLOOR_TEXTURES = {
  light: { color: "#F5F5F5", grid: "#E0E0E0" },
  dark: { color: "#616161", grid: "#424242" },
  wood: { color: "#D7CCC8", grid: "#BCAAA4" },
  tile: { color: "#FFFFFF", grid: "#E0E0E0" },
};

const getFurnitureSize = (type, rotation = 0) => {
  const size = FURNITURE_BASE_SIZES[type] || FURNITURE_BASE_SIZES.default;
  return rotation % 180 === 0 ? size : { cols: size.rows, rows: size.cols };
};

const useGridPositionCalculator = (gridRef, gridSize) => {
  return useCallback((clientX, clientY) => {
    if (!gridRef.current) return { x: 0, y: 0 };

    const gridRect = gridRef.current.getBoundingClientRect();
    const cellSize = gridRect.width / gridSize;
    
    const x = Math.max(
      0,
      Math.min(gridSize - 1, Math.floor((clientX - gridRect.left) / cellSize))
    );
    const y = Math.max(
      0,
      Math.min(gridSize - 1, Math.floor((clientY - gridRect.top) / cellSize))
    );

    return { x, y };
  }, [gridRef, gridSize]);
};

const GridCellComponent = ({ row, col, onCellClick, isFree }) => (
  <GridCell
    key={`${row}-${col}`}
    onClick={() => onCellClick(col, row)}
    $isFree={isFree}
  />
);

const FurnitureComponent = ({ 
  item, 
  mode, 
  selectedItem, 
  onRotateFurniture, 
  handleItemClick,
  handleDoubleClick
}) => {
  const { cols, rows } = useMemo(() => 
    getFurnitureSize(item.type, item.rotation), 
    [item.type, item.rotation]
  );

  let Component;
  if (item.positions) {
    const position = item.positions.find(
      (p) => p.rotation === item.rotation
    );
    Component = position ? position.component : item.component;
  } else {
    Component = item.component;
  }

  return (
    <StyledElement
      key={`${item.id}-${item.rotation}`}
      $x={item.x}
      $y={item.y}
      $cols={cols}
      $rows={rows}
      $mode={mode}
      $isSelected={selectedItem?.id === item.id}
      onClick={(e) => handleItemClick(e, item)}
      onDoubleClick={(e) => handleDoubleClick(e, item)}
    >
      {Component && <Component />}
    </StyledElement>
  );
};

export const RoomGrid = ({
  furniture,
  onRotateFurniture,
  floorTheme,
  onCellClick,
  selectedItem,
  mode,
  onDelete,
  setSelectedItem,
}) => {
  const gridRef = useRef(null);
  
  if (!onCellClick || !onRotateFurniture) {
    console.error("RoomGrid: Пропси onCellClick та onRotateFurniture є обов'язковими");
  }

  const calculateGridPosition = useGridPositionCalculator(gridRef, GRID_SIZE);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "FURNITURE",
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      if (!offset) return;

      const { x, y } = calculateGridPosition(offset.x, offset.y);
      onCellClick(x, y);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  drop(gridRef);

  const currentFloor = useMemo(() => 
    FLOOR_TEXTURES[floorTheme] || FLOOR_TEXTURES.light, 
    [floorTheme]
  );

  const handleItemClick = useCallback((e, item) => {
    e.stopPropagation();
    if (mode === "delete") {
      onDelete(item.id);
    } else {
      setSelectedItem(item);
    }
  }, [mode, onDelete, setSelectedItem]);

  const canRotateFurniture = useCallback((itemId, newRotation) => {
    const item = furniture.find(f => f.id === itemId);
    if (!item) return false;
    
    const oldSize = getFurnitureSize(item.type, item.rotation);
    const newSize = getFurnitureSize(item.type, newRotation);
    
    if (item.x + newSize.cols > GRID_SIZE || item.y + newSize.rows > GRID_SIZE) {
      return false;
    }
    
    for (let y = item.y; y < item.y + newSize.rows; y++) {
      for (let x = item.x; x < item.x + newSize.cols; x++) {
        if (x >= item.x && x < item.x + oldSize.cols && 
            y >= item.y && y < item.y + oldSize.rows) {
          continue;
        }
        
        if (!isCellFree(x, y, itemId)) {
          return false;
        }
      }
    }
    
    return true;
  }, [furniture, GRID_SIZE]);

  const isCellFree = useCallback((x, y, excludeId = null) => {
    return !furniture.some((item) => {
      if (excludeId && item.id === excludeId) return false;
      
      const size = getFurnitureSize(item.type, item.rotation || 0);

      if (
        item.x < 0 ||
        item.y < 0 ||
        item.x + size.cols > GRID_SIZE ||
        item.y + size.rows > GRID_SIZE
      ) {
        return true;
      }

      return (
        x >= item.x &&
        x < item.x + size.cols &&
        y >= item.y &&
        y < item.y + size.rows
      );
    });
  }, [furniture]);

  const handleDoubleClick = useCallback((e, item) => {
    e.stopPropagation();
    const newRotation = (item.rotation + 90) % 360;
    
    if (canRotateFurniture(item.id, newRotation)) {
      onRotateFurniture(item.id, newRotation);
    } else {
      console.log("Cannot rotate furniture - not enough space");
    }
  }, [onRotateFurniture, canRotateFurniture]);

  const gridCells = useMemo(() => 
    Array.from({ length: GRID_SIZE }, (_, row) =>
      Array.from({ length: GRID_SIZE }, (_, col) => (
        <GridCellComponent
          key={`${row}-${col}`}
          row={row}
          col={col}
          onCellClick={onCellClick}
          isFree={isCellFree(col, row)}
        />
      ))
    ), 
    [GRID_SIZE, onCellClick, isCellFree]
  );

  return (
    <GridContainer
      id="room-grid"
      ref={drop}
      $isOver={isOver}
      $floorColor={currentFloor.color}
      $gridColor={currentFloor.grid}
    >
      {gridCells}
      
      {furniture.map((item) => (
        <FurnitureComponent
          key={item.id}
          item={item}
          mode={mode}
          selectedItem={selectedItem}
          onRotateFurniture={onRotateFurniture}
          handleItemClick={handleItemClick}
          handleDoubleClick={handleDoubleClick}
        />
      ))}
    </GridContainer>
  );
};