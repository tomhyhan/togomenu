import React from "react";
import { useDrop } from "react-dnd";
import DropItem from "./dropitem.component";
import styles from "./droptarget.module.css";

interface DropTargetProps {
  order: [string, string];
  idx: number;
  orderlength: number;
  onDrop: (position: number, idx: number) => void;
  onAddOrders: () => void;
}

function DropTarget({
  order,
  idx,
  orderlength,
  onDrop,
  onAddOrders,
}: DropTargetProps) {
  return (
    <li className={styles.chooseOrderItem}>
      <DropItem order={order} idx={idx} position={1} onDrop={onDrop} />
      <div className={styles.arrow}>&rarr;</div>
      <div className={styles.addBtnGrp}>
        <DropItem order={order} idx={idx} position={2} onDrop={onDrop} />
        {idx === orderlength && (
          <button className={styles.addBtn} onClick={onAddOrders}>
            add
          </button>
        )}
      </div>
    </li>
  );
}

export default DropTarget;
