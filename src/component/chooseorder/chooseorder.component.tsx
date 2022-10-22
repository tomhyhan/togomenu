import React from "react";
import { useDrop } from "react-dnd";
import DropTarget from "../droptarget/droptarget.component";
import styles from "./chooseorder.module.css";

interface ChooseOrderProps {
  onDragEnter: () => void;
  onDragOver: () => void;
  onDrop: (position: number, idx: number) => void;
  selectedInstruction: [number, string] | null;
  orders: [string, string][];
  onAddOrders: () => void;
  orderWarning: string | null;
  onCreateRecipe: () => void;
}

function ChooseOrder({
  onDragEnter,
  onDragOver,
  onDrop,
  selectedInstruction,
  orders,
  onAddOrders,
  orderWarning,
  onCreateRecipe,
}: ChooseOrderProps) {
  const handleDragEnter = () => {
    onDragEnter();
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    onDragOver();
  };
  const handleDrop = (e: React.DragEvent, position: number, idx: number) => {
    e.preventDefault();
    onDrop(position, idx);
  };
  const handleCreateRecipe = () => {
    onCreateRecipe();
  };
  return (
    <div>
      <h3>Make Your Recipe</h3>
      <ul className={styles.chooseOrder}>
        {orders.map((order, idx) => {
          return (
            <DropTarget
              key={Date.now() + Math.random()}
              order={order}
              idx={idx}
              orderlength={orders.length - 1}
              onDrop={onDrop}
              onAddOrders={onAddOrders}
            />
          );
        })}
      </ul>
      <div className={styles.recipe}>
        <button className={styles.recipeBtn} onClick={handleCreateRecipe}>
          Create Recipe!
        </button>
      </div>
      {orderWarning && <div className={styles.warning}>{orderWarning}</div>}
    </div>
  );
}

export default ChooseOrder;
