import React from "react";
import { useParams } from "react-router-dom";
import { IMenu } from "../../data/menu.data";
import styles from "./item.module.css";

interface ItemProps {
  menu: IMenu;
}

type Category =
  | "appetizer"
  | "tempura"
  | "udon"
  | "yaki"
  | "teriyaki"
  | "bento";

function Item({ menu }: ItemProps) {
  const { category } = useParams<{ category: Category }>();

  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.categoryName}>
          {capitalizeFirstLetter(category!)}
        </h1>
        {Object.keys(menu[category!]).map((item) => {
          return (
            <div>
              <h3>{item}</h3>
              <ol>
                {Object.keys(menu[category!][item]).map((key) => (
                  <li>
                    {key} : {menu[category!][item][key]}
                  </li>
                ))}
              </ol>
            </div>
          );
        })}
      </div>
      <div className={styles.border}></div>
      <div>
        <h2 className={styles.orderTitle}>How to make</h2>
      </div>
    </main>
  );
}

export default Item;

function capitalizeFirstLetter(string: Category) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
