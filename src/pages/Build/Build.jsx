import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { RoomBuilder } from "./RoomBuilder/RoomBuilder";

export const Build = () => {
  return (
    <main>
      <DndProvider backend={HTML5Backend}>
        <RoomBuilder />
      </DndProvider>
    </main>
  );
};
