import { useRouter } from "next/navigation";
import axios from "axios";
import { db } from "./firebase";
import { getDocs, collection } from "firebase/firestore";

const useUserLogin = (setError) => {
  const router = useRouter();

  const getUserLogin = async (data) => {
    try {
      const res = await getDocs(collection(db, "profile"));
      const result = res.docs.map((doc) => doc.data())
      console.log(result)

      const userId = result.find((user) => user.email === data.email);

      if (userId) {
        const userName = userId.name;
        localStorage.setItem("id", userName);
        router.push("/new");
      } else {
        setError("email", {
          type: "manual",
          message: "이메일을 확인해주세요",
        });
        setError("password", {
          type: "manual",
          message: "비밀번호를 확인해주세요",
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return getUserLogin;
};

export default useUserLogin;

//data 는 인풋에 입력되는 data
//http://localhost:3000/api/profile

// setDoc과 addDoc으로 추가해 줄 수 있다. 두 함수의 차이점은, setDoc의 경우 ID를 직접 지정할 수 있으나, 
//addDoc은 아이디가 자동으로 생성 된다는 것

//getDocs는 데이터베이스의 컬렉션을 가져오는 것이다.

//데이터 실시간으로 가져오기 : onSnapshot
// getDoc과 마찬가지로 Firestore에 저장된 document를 가져오는데 사용되는 메서드이다. 단, 차이점이 존재하는데
// Firestore에 저장된 document나 collection의 변경 사항을 실시간으로 감지하고 처리하는데 사용되는 메서드이다.


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



// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { db } from "./firebase";
// import { getDocs, collection } from "firebase/firestore";

// const useUserLogin = (setError) => {
//   const router = useRouter();

//   const getUserLogin = async (data) => {
//     try {
//       const res = await axios.post("http://localhost:3000/api/profile", data);
//       const result = await res.data;

//       const userId = result.find((user) => user.email === data.email);

//       if (userId) {
//         const userName = userId.name;
//         localStorage.setItem("id", userName);
//         router.push("/new");
//       } else {
//         setError("email", {
//           type: "manual",
//           message: "이메일을 확인해주세요",
//         });
//         setError("password", {
//           type: "manual",
//           message: "비밀번호를 확인해주세요",
//         });
//       }
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return getUserLogin;
// };

// export default useUserLogin;