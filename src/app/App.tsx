import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../component/home/home.component";
import Menu from "../component/menu/menu.component";
import Item from "../component/item/item.component";
import { IMenu } from "../data/menu.data";

interface AppProps {
  menu: IMenu;
}

function App({ menu }: AppProps) {
  return (
    <div
      className={styles.app}
      style={{ backgroundImage: 'url("images/homebg.jpg")' }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu menu={menu} />} />
        <Route path="/:category" element={<Item menu={menu} />} />
      </Routes>
    </div>
  );
}

export default App;
