import { addDoc, collection } from "firebase/firestore";

import db from "../firestore";
import { DBType } from "../types";

const handleFormSubmit = async (order: DBType) => {
  try {
    await addDoc(collection(db, "clients"), {
      order,
    });
  } catch (error) {
    console.error("Error al enviar el formulario:", error);
  }
};

export { handleFormSubmit };
