import { deleteDoc, doc } from 'firebase/firestore'
import { db } from './firebase'
import React from 'react'
const useUserDelete = () => {

  const deleteUser = async () => {
    const res = await deleteDoc(doc(db, "profile","userInfo" ));
  }
  return deleteUser
  
}

export default useUserDelete

// const getCollection = async () => {
//   const testData = await getDocs(collection(db, "profile"));
//   const testArray = testData.docs.map((doc) => doc.data());
//   //

//   console.log(testArray);
//   return testData;
// };
// useEffect(() => {
//   getCollection();
// }, []);
