import { DB } from "./firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteField,
} from "firebase/firestore";

type FireStore = typeof DB;

export interface DataBaseI {
  collection: (category: string, finalOrder: { [submenu: string]: [] }) => void;
  delete: (category: string, subcategory: string) => void;
  read: (category: string) => Promise<any>;
}
export default class DataBase implements DataBaseI {
  constructor(private db: FireStore) {
    this.db = db;
  }

  public collection = async (category: string, finalOrder: any) => {
    console.log(category);
    try {
      const docRef = await setDoc(doc(this.db, "menu", category), {
        ...finalOrder,
      });
      console.log("collected!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  public read = async (category: string) => {
    const docRef = doc(this.db, "menu", category);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("no such document!");
      return false;
    }
  };

  public delete = async (category: string, subcategory: string) => {
    const menuRef = doc(this.db, "menu", category);
    // console.log("asdf");
    await updateDoc(menuRef, {
      [subcategory]: deleteField(),
    });
    console.log("deleted!");
  };
}
