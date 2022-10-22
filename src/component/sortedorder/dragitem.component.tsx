import React, { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import styles from "./dragitem.module.css";
interface DragItemProps {
  instruction: [number, string];
  onDragStart: (instruction: [number, string]) => void;
}

interface DropResult {
  name: string;
  position: number;
}

function DragItem({ instruction, onDragStart }: DragItemProps) {
  const [[x, y], setXY] = useState<[number, number]>([0, 0]);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "menu",
    item: {},
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      // if (item && dropResult) {
      //   alert(
      //     `You dropped ${dropResult.name}! position ${dropResult.position}`
      //   );
      // }
      console.log("end drop");
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      getClientOffset: monitor.getClientOffset(),
    }),
  }));
  useEffect(() => {
    if (isDragging) {
      console.log("dragging");
      onDragStart(instruction);
    }
  }, [isDragging]);
  const handleMove = (e: React.TouchEvent) => {
    console.log(e.touches);
    if (isDragging) {
      const x = e.touches[0].pageX - e.currentTarget.clientWidth;
      const y = e.touches[0].pageY + 7;
      // console.log(typeof x);
      // console.log(typeof e.touches[0].pageX);
      // console.log(typeof e.currentTarget.clientWidth);
      // console.log(e.currentTarget.parentElement!.clientHeight);
      // console.log(x);
      // console.log(y);
      setXY([x, y]);
    }
  };
  return (
    <div className={styles.orders} onTouchMove={(e) => handleMove(e)}>
      {instruction[1] !== "" && (
        <li
          className={styles.orderItem}
          draggable="true"
          // onDragStart={() => onDragStart(instruction)}
          // onDragEnd={handleDragEnd}
          ref={drag}
          style={{
            position: "absolute",
            // transform: isDragging ? "translate(10px, 10px)" : "",
            top: isDragging ? y : undefined,
            left: isDragging ? x : undefined,
          }}
        >
          {instruction[0]} : {instruction[1]}
        </li>
      )}
    </div>
  );
}

export default DragItem;
