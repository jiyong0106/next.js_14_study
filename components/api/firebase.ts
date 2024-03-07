
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//? 안됨

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_REACT_APP_FB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_REACT_APP_FB_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_REACT_APP_FB_MEASUREMENT_ID,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
 
//환경변수 ; 중요
//NEXT_PUBLIC_ 붙여줘야함,
//클라이언트 측에서 사용해야 하는 환경 변수는 NEXT_PUBLIC_을 붙여서 정의함으로써, 
//브라우저에서 접근 가능한 변수임을 명시적으로 표시하게 됩니다