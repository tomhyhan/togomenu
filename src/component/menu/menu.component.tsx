import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { IMenu } from "../../data/menu.data";
import styles from "./menu.module.css";

interface MenuProps {
  menu: IMenu;
}

function Menu({ menu }: MenuProps) {
  const navigate = useNavigate();

  const handleClick = (category: string) => {
    navigate(`/${category}`);
  };

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Menu</h2>
      <ul className={styles.menuGrp}>
        {Object.keys(menu).map((category) => {
          return (
            <li
              key={category}
              className={styles.li}
              onClick={() => handleClick(category)}
            >
              <img
                className={styles.img}
                src={`images/${category}.jpg`}
                alt={`${category}-img`}
              />
              <h3
                onClick={() => handleClick(category)}
                className={styles.category}
              >
                {category}
              </h3>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </main>
  );
}

export default Menu;
