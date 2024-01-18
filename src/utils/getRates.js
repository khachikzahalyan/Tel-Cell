import { getDocs, collection, getFirestore } from "firebase/firestore";

import app from "../firebase";

const getRates = async () => {
  try {
    const data = [];
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "rates"));

    querySnapshot.forEach((doc) => {
      data.push({ name: doc.name, id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default getRates;
