import React, { useEffect } from "react";
import { Category, IMenu } from "../../data/menu.data";
import styles from "./order.module.css";

interface OrderProps {
  menu: IMenu;
  onAddList: () => void;
  onInputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => void;
  onGetInstructions: () => void;
  instructionNum: [number, string][];
  category: Category;
  onChangeSubCategory: (category: string) => void;
  subCategoryRef: string;
}

function Order({
  menu,
  onAddList,
  onInputChange,
  onGetInstructions,
  instructionNum,
  category,
  onChangeSubCategory,
  subCategoryRef,
}: OrderProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeSubCategory(e.target.value);
  };
  return (
    <div>
      <h3>Instructions </h3>
      <div className={styles.menusoptions}>
        <label htmlFor="menus">Menu</label>
        <select
          name="menus"
          className={styles.menuSelected}
          onChange={(e) => handleChange(e)}
        >
          {Object.keys(menu[category!]).map((item, idx) => {
            return (
              <option key={item + Date.now()} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <ol className={styles.orderList}>
        {instructionNum.map((num) => {
          return (
            <li className={styles.orderListItem} key={num[0]}>
              <input
                className={styles.orderInput}
                type="text"
                onChange={(event) => onInputChange(event, num[0])}
              />
              {instructionNum.length === num[0] && (
                <button className={styles.addOrderBtn} onClick={onAddList}>
                  add
                </button>
              )}
            </li>
          );
        })}
        <div className={styles.orderBtnGrp}>
          <button className={styles.addOrderBtn} onClick={onGetInstructions}>
            create
          </button>
        </div>
      </ol>
    </div>
  );
}

export default Order;
