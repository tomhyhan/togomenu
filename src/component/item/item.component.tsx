import React, { ReactHTMLElement, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Category, IMenu } from "../../data/menu.data";
import Order from "../order/order.component";
import SortedOrder from "../sortedorder/sortedorder.component";
import styles from "./item.module.css";
import ChooseOrder from "../chooseorder/chooseorder.component";
import { TopologicalSort } from "../../service/topologicalsort";
import { DataBaseI } from "../../service/database";

interface ItemProps {
  menu: IMenu;
  topologicalSort: TopologicalSort;
  db: DataBaseI;
}

function Item({ menu, topologicalSort, db }: ItemProps) {
  const [instructionNum, setInstructionNum] = useState<[number, string][]>([
    [1, ""],
  ]);
  const [orders, setOrders] = useState<[string, string][]>([["", ""]]);
  const { category } = useParams<{ category: Category }>();
  const [subCategoryRef, __] = useState<{
    current: string | null;
  }>({ current: null });
  const [warning, setWarning] = useState<boolean>(false);
  const [selectedInstructionRef, _] = useState<{
    current: [number, string] | null;
  }>({ current: null });
  const [orderWarning, setOrderWarning] = useState<string | null>(null);
  const [finalOrder, setFinalOrder] = useState<any>({});
  const [showFinalOrder, setShowFinalOrder] = useState<boolean>(true);
  // console.log(finalOrder);
  // mobile touch
  //
  useEffect(() => {
    // @ts-ignore
    subCategoryRef.current = Object.keys(menu[category!])[0];
    // setSubCategory(Object.keys(menu[category!])[0]);
  }, []);

  // useEffect(() => {
  //   const getFinalOrder = async () => {
  //     let dbOrder = await db.read(category!);
  //     if (!dbOrder) dbOrder = {};
  //     setFinalOrder(dbOrder);
  //     console.log(finalOrder);
  //   };
  //   getFinalOrder();
  // }, []);

  const addList = () => {
    if (instructionNum[instructionNum.length - 1][1].length === 0) {
      setWarning(true);
      return;
    }
    setWarning(false);
    setInstructionNum([...instructionNum, [instructionNum.length + 1, ""]]);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const newInstruction = instructionNum.map((num) => {
      if (num[0] === idx) {
        return [num[0], event.target.value];
      }
      return num;
    });
    setInstructionNum(newInstruction as [number, string][]);
  };

  const handleSubCategory = (category: string) => {
    subCategoryRef.current = category;
  };

  const getInstructions = () => {
    if (subCategoryRef.current === null) {
      setWarning(true);
      return;
    }
    if (instructionNum[0][1].length === 0) {
      setWarning(true);
      return;
    }
  };

  const handleDragStart = (instruction: [number, string]) => {
    // e.preventDefault();
    // console.log("drag start");
    // console.log(instruction);
    // if (selectedInstruction == null) {
    selectedInstructionRef.current = instruction;
    // }
  };

  const handleDragEnd = () => {
    // console.log("drag end");
    selectedInstructionRef.current = null;
    // setSelectedInstruction(null);
  };

  const handleDragEnter = () => {
    // console.log("drag enter");
  };

  const handleDragOver = () => {
    // console.log("drag over");
  };

  const handleDrop = (position: number, idx: number) => {
    console.log("drop");
    if (selectedInstructionRef.current !== null) {
      const [currentIdx, currentInstruction] = selectedInstructionRef.current;
      // console.log("here!!");
      // console.log(currentIdx, currentInstruction);
      // console.log(position, idx);
      const newOrders = orders.map((order, orderIdx) => {
        // if currentIdx is orderIdx , change the instrucntion
        // according to its position :)
        if (idx === orderIdx) {
          return position === 1
            ? ([`${currentIdx} : ${currentInstruction}`, order[1]] as [
                string,
                string
              ])
            : ([order[0], `${currentIdx} : ${currentInstruction}`] as [
                string,
                string
              ]);
        }
        return order;
      });
      // console.log(newOrders);
      setOrders(newOrders);
    }
    // console.log("---drop---");
  };

  const handleAddOrders = () => {
    const currentOrder = orders[orders.length - 1];
    if (currentOrder[0] === "" || currentOrder[1] === "") {
      return;
    }
    setOrders([...orders, ["", ""]]);
  };

  const handleOrderWarning = () => {};

  const handleCreateRecipe = () => {
    for (const order of orders) {
      if (order[0] == "" || order[1] == "") {
        setOrderWarning("Please make sure all fields are filled in");
        return;
      }
    }
    setOrderWarning(null);

    // console.log(instructionNum);
    // console.log(orders);

    const isOrder = new Set();
    orders.map((order) => {
      isOrder.add(parseInt(order[0].split(":")[0].trim()));
      isOrder.add(parseInt(order[1].split(":")[0].trim()));
    });
    // console.log(isOrder);
    const jobList = instructionNum.filter(
      (instruction) => instruction[1].length > 0 && isOrder.has(instruction[0])
    );

    const sortedOrder = topologicalSort.getInstrunctions(jobList, orders);
    if (sortedOrder.length === 0) {
      setOrderWarning("Wrong Recipe Orders");
      return;
    }
    setOrderWarning(null);

    // here create a new final order
    const newFinalOrder = {
      ...finalOrder,
      [subCategoryRef.current!]: sortedOrder,
    };

    //
    //   Object.keys(finalOrder).map((order) => {
    //     if (order === subCategory) {
    //       return;
    //     return order
    //   })
    // );
    db.collection(category!, newFinalOrder);
    setFinalOrder(newFinalOrder);
    setShowFinalOrder(true);
  };

  const handleNewRecipe = () => {
    // db.delete();
    // setFinalOrder(null);
    setShowFinalOrder(false);
  };
  // console.log(subCategoryRef);

  const handleClick = (category: string, subCategory: string) => {
    db.delete(category, subCategory);
    delete finalOrder[subCategory];
    setFinalOrder({ ...finalOrder });
  };

  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.categoryName}>
          {capitalizeFirstLetter(category!)}
        </h1>
        {/* @ts-ignore */}
        {Object.keys(menu[category!]).map((item) => {
          return (
            <div key={item}>
              <h3>{item}</h3>
              <ul className={styles.itemList}>
                {/* @ts-ignore */}
                {Object.keys(menu[category!][item]).map((key) => (
                  <li key={key}>
                    {/* @ts-ignore */}
                    {key} : {menu[category!][item][key]}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      {/* <div className={styles.border}></div>
      <h2 className={styles.orderTitle}>How to make</h2>
      {showFinalOrder ? (
        <div>
          {" "}
          {Object.keys(finalOrder).map((subCategory) => {
            return (
              <div key={subCategory + Date.now()}>
                <div className={styles.categoryItem}>
                  <h3>{subCategory}</h3>
                  <button
                    className={styles.categoryBtn}
                    onClick={() => handleClick(category!, subCategory)}
                  >
                    remove
                  </button>
                </div>
                {finalOrder[subCategory].map((order: string, idx: number) => (
                  <div className={styles.finalOrder} key={idx}>
                    {order}
                  </div>
                ))}
              </div>
            );
          })}
          <div className={styles.newBtnContainer}>
            <button
              className={styles.addNewRecipeBtn}
              onClick={handleNewRecipe}
            >
              Create a new Recipe!
            </button>
          </div>
        </div>
      ) : (
        <>
          <Order
            menu={menu}
            onAddList={addList}
            onInputChange={handleInputChange}
            onGetInstructions={getInstructions}
            instructionNum={instructionNum}
            category={category!}
            onChangeSubCategory={handleSubCategory}
            subCategoryRef={subCategoryRef.current!}
          />
          {warning && (
            <div className={styles.warning}>
              please select a menu or add instructions
            </div>
          )}
          {subCategoryRef.current && instructionNum[0][1].length > 0 && (
            <>
              <SortedOrder
                instructionNum={instructionNum}
                subCategory={subCategoryRef.current}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              />
              <ChooseOrder
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                selectedInstruction={selectedInstructionRef.current}
                orders={orders}
                onAddOrders={handleAddOrders}
                orderWarning={orderWarning}
                onCreateRecipe={handleCreateRecipe}
              />
            </>
          )}
        </>
      )}
      <div className={styles.border}></div> */}
    </main>
  );
}

export default Item;

function capitalizeFirstLetter(string: Category) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
