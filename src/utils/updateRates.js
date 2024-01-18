import {
  query,
  where,
  getDocs,
  updateDoc,
  collection,
  getFirestore,
} from "firebase/firestore";

import app from "../firebase";

const updateRates = async (id, updatedData) => {
  try {
    const db = getFirestore(app);

    const q = query(collection(db, "rates"), where("id", "==", id));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docRef = querySnapshot.docs[0].ref;
      await updateDoc(docRef, { ...updatedData });
    }

    return true;
  } catch (error) {
    return error;
  }
};

export default updateRates;
