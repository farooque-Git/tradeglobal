import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-ThS2hx4VM-aB_wrZqEiiReRQjRr1GQg",
  authDomain: "tradeye-1af4a.firebaseapp.com",
  projectId: "tradeye-1af4a",
  storageBucket: "tradeye-1af4a.appspot.com",
  messagingSenderId: "3220387483",
  appId: "1:3220387483:web:8d2408225794d9831d383e",
  measurementId: "G-JZFF2LDMBS",
};

const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, fireDb, storage };
