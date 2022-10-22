import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import * as menu from "./data/menu.data";
import { TopologicalSort } from "./service/topologicalsort";
import { DndProvider } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import DataBase from "./service/database";
import { DB } from "./service/firebase";

const menuData = menu;
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const topologicalSort = new TopologicalSort();

const db = new DataBase(DB);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <DndProvider backend={HTML5Backend}> */}
      <DndProvider options={HTML5toTouch}>
        <App menu={menuData} topologicalSort={topologicalSort} db={db} />
      </DndProvider>
      {/* </DndProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
