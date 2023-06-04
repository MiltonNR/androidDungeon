import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDvh7Jq_JDwkVYpvzaU69vOdK0G-NWHQP4",
  authDomain: "androiddungeon-4bead.firebaseapp.com",
  projectId: "androiddungeon-4bead",
  storageBucket: "androiddungeon-4bead.appspot.com",
  messagingSenderId: "207273121212",
  appId: "1:207273121212:web:a167ed654a295f228787b9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)