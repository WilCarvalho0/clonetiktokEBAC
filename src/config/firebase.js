
import { initializeApp } from "firebase/app";
import { getFirestore }  from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDjmG8skUaC82GQzesIeEgXl3WeWH9XodM",
  authDomain: "tiktok---jornada-91a84.firebaseapp.com",
  projectId: "tiktok---jornada-91a84",
  storageBucket: "tiktok---jornada-91a84.appspot.com",
  messagingSenderId: "686862198318",
  appId: "1:686862198318:web:736f79ec593ee4ef9d21bf"
};


const app = initializeApp(firebaseConfig);
const db =  getFirestore(app);

export default db; 