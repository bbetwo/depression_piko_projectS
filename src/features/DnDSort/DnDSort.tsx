import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { SortableItem } from "./SortableItem";

const arrMoc = (): { id: number; text: string }[] => {
  const Moc = Array.from({ length: 10 }, (_, i) => {
    return {
      id: i + 1,
      text: ["tut", "tam", "de"][i % 3],
    };
  });

  return Moc;
};

export const DnDSort = () => {
  const [items, setItems] = useState<{ id: number; text: string }[]>(arrMoc());

  const sensor = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (active.id !== over?.id) {
      setItems((items) => {
        const oldImdex = items.findIndex((el) => el.id === active.id);
        const newIndex = items.findIndex((el) => el.id === over?.id);
        return arrayMove(items, oldImdex, newIndex);
      });
    }
  };

  return (
    <DndContext
      sensors={sensor}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div>
          {items.map((el) => {
            return <SortableItem key={el.id} id={el.id} text={el.text} />;
          })}
        </div>
      </SortableContext>
    </DndContext>
  );
};
