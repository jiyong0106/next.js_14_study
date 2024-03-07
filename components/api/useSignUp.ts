import axios from "@/components/api/axios";
import { useRouter } from "next/navigation";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "./firebase";

const useSignUp = () => {
  const router = useRouter();
  const getUserSignUp = async (data) => {
    try {
      const res = await addDoc(collection(db,"profile"), {
        email: data.email,
        name: data.userName,
      });
      localStorage.setItem("id", data.userName);
      router.push("/new");
    } catch (e) {
      console.error(e);
    }
  };
  return getUserSignUp;
};

export default useSignUp;

//"http://localhost:3000/api/profile"


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
