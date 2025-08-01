import { useDrop } from "react-dnd";
import { GridContainer, GridCell } from "./styles/RoomGrid.styled";
import { useCallback, useRef } from "react";

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
  const gridSize = 6;

  const calculateGridPosition = useCallback((clientX, clientY) => {
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
  }, []);

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

  const floorTextures = {
    light: { color: "#F5F5F5", grid: "#E0E0E0" },
    dark: { color: "#616161", grid: "#424242" },
    wood: { color: "#D7CCC8", grid: "#BCAAA4" },
    tile: { color: "#FFFFFF", grid: "#E0E0E0" },
  };

  const currentFloor = floorTextures[floorTheme] || floorTextures.light;

  const handleItemClick = (e, item) => {
    e.stopPropagation();
    if (mode === "delete") {
      onDelete(item.id);
    } else {
      setSelectedItem(item);
    }
  };

  const getFurnitureSize = (type, rotation = 0) => {
    let size = { cols: 1, rows: 1 };

    switch (type) {
      case "bed":
        size = { cols: 3, rows: 2 };
        break;
      case "sofa":
        size = { cols: 2, rows: 1 };
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

  const isCellFree = (x, y) => {
    return !furniture.some((item) => {
      const size = getFurnitureSize(item.type, item.rotation || 0);

      if (
        item.x < 0 ||
        item.y < 0 ||
        item.x + size.cols > gridSize ||
        item.y + size.rows > gridSize
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
  };

  return (
    <GridContainer
      id="room-grid"
      ref={drop}
      $isOver={isOver}
      $floorColor={currentFloor.color}
      $gridColor={currentFloor.grid}
    >
      {Array.from({ length: gridSize }).map((_, row) =>
        Array.from({ length: gridSize }).map((_, col) => (
          <GridCell
            key={`${row}-${col}`}
            onClick={() => onCellClick(col, row)}
            $isFree={isCellFree(col, row)}
          />
        ))
      )}

      {furniture.map((item) => {
        const { cols, rows } = getFurnitureSize(item.type, item.rotation);
        const Component = item.component;

        return (
          <div
            key={item.id}
            style={{
              gridColumn: `${item.x + 1} / span ${cols}`,
              gridRow: `${item.y + 1} / span ${rows}`,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
              pointerEvents: "auto",
              cursor: mode === "delete" ? "not-allowed" : "pointer",
              outline:
                selectedItem?.id === item.id ? "2px solid #4DB6AC" : "none",
              borderRadius: "4px",
            }}
            onClick={(e) => handleItemClick(e, item)}
            onDoubleClick={(e) => {
              e.stopPropagation();
              onRotateFurniture(item.id, 90);
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                transform: `rotate(${item.rotation}deg)`,
                transformOrigin: "center center",
                transition: "transform 0.3s ease",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Component rotation={item.rotation} />
            </div>
          </div>
        );
      })}
    </GridContainer>
  );
};
