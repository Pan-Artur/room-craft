import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Hero } from './Hero/Hero';
import { RoomBuilder } from "./RoomBuilder/RoomBuilder";

export const Build = () => {
  return (
    <main>
      <DndProvider backend={HTML5Backend}>
        <Hero />
        <RoomBuilder />
      </DndProvider>
    </main>
  );
};
