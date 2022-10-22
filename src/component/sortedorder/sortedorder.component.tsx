import React, { useState } from "react";
import { useDrag } from "react-dnd";
import DragItem from "./dragitem.component";
import styles from "./sortedorder.module.css";

interface SortedOrderProps {
  instructionNum: [number, string][];
  subCategory: string;
  onDragStart: (instruction: [number, string]) => void;
  onDragEnd: () => void;
}

function SortedOrder({
  instructionNum,
  subCategory,
  onDragStart,
  onDragEnd,
}: SortedOrderProps) {
  // drag and drop
  // input for

  const handleDragStart = (instruction: [number, string]) => {
    onDragStart(instruction);
  };
  // const handleDrag = () => {
  //   console.log("drag");
  // };
  const handleDragEnd = () => {
    onDragEnd();
  };
  // const handleTouchMove = (e: React.TouchEvent<HTMLLIElement>) => {
  //   console.log(e.currentTarget);
  //   // e.preventDefault();
  //   const touch = e.touches[0];
  //   const test = e.currentTarget;
  //   console.log(test.clientLeft);
  //   console.log("move!");
  //   console.log(touch.clientX);
  //   console.log(touch.clientY);
  //   console.log(touch.pageX);
  //   console.log(touch.pageY);
  //   setX(touch.pageX);
  //   setY(touch.pageY);
  // };
  // const handleTouchStart = (e: React.TouchEvent<HTMLLIElement>) => {
  //   const touch = e.touches[0];
  //   console.log("start");
  //   console.log(touch.pageX);
  //   console.log(touch.pageY);
  // };
  return (
    <div>
      <h3>Orders</h3>
      <h4>{subCategory}</h4>
      <ul className={styles.orderList}>
        {instructionNum.map((instruction, idx) => {
          return (
            <DragItem
              key={Date.now() + Math.random()}
              instruction={instruction}
              onDragStart={onDragStart}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default SortedOrder;
