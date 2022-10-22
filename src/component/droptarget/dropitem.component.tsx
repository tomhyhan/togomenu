import React, { memo } from "react";
import { useDrop } from "react-dnd";
import styles from "./dropitem.module.css";

interface DropItemProps {
  order: [string, string];
  idx: number;
  position: number;
  onDrop: (position: number, idx: number) => void;
}

const DropItem = memo(function DropItemfn({
  order,
  idx,
  position,
  onDrop,
}: DropItemProps) {
  const [_, drop] = useDrop(() => ({
    accept: "menu",
    item: { name: idx },
    drop: (item, monitor) => {
      console.log(position);
      onDrop(position, idx);
      return { name: idx, position };
    },
  }));
  return (
    <div
      className={styles.instruction}
      // onDragOver={(e) => handleDragOver(e)}
      // onDrop={(e) => handleDrop(e, 1, idx)}
      ref={drop}
    >
      {order[position - 1].length > 0 && (
        <div className={styles.instructionStyle}>{order[position - 1]}</div>
      )}
    </div>
  );
});

export default DropItem;
