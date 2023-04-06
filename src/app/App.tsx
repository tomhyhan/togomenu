import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "../component/home/home.component";
import Menu from "../component/menu/menu.component";
import Item from "../component/item/item.component";
import { IMenu } from "../data/menu.data";
import { TopologicalSort } from "../service/topologicalsort";
import { DataBaseI } from "../service/database";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface AppProps {
  menu: IMenu;
  topologicalSort: TopologicalSort;
  db: DataBaseI;
}

function App({ menu, topologicalSort, db }: AppProps) {
  const location = useLocation();

  return (
    <div
      className={styles.app}
      style={{ backgroundImage: 'url("images/homebg.jpg")' }}
    >
      <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
        
          <Routes location={location}>

            <Route path="/menu" element={<Menu menu={menu} />} />
            <Route
              path="/:category"
              element={
                <Item menu={menu} topologicalSort={topologicalSort} db={db} />
              }
              />
          </Routes>
          </CSSTransition>
      </TransitionGroup>

      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
