import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAL8MOh1Omw-41hqHvpPW65PaEnyjtQ",
  authDomain: "androidos-a8d35.firebaseapp.com",
  projectId: "androidos-a8d35",
  storageBucket: "androidos-a8d35.appspot.com",
  messagingSenderId: "568743960522",
  appId: "1:568743960522:web:6f926bb3177ddf8c937933"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


/*apiKey: process.env.REACT_APP_apiKey,
authDomain: process.env.REACT_APP_authDomain,
projectId: process.env.REACT_APP_projectId,
storageBucket: process.env.REACT_APP_storageBucket,
messagingSenderId: process.env.REACT_APP_messagingSenderId,
appId: process.env.REACT_APP_appId,*/