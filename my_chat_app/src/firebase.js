import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD21vYU40jp7PV1wTJDMfWvG18-AT_p9EI",
  authDomain: "fb-messenger-clone-8e39c.firebaseapp.com",
  projectId: "fb-messenger-clone-8e39c",
  storageBucket: "fb-messenger-clone-8e39c.appspot.com",
  messagingSenderId: "116134149665",
  appId: "1:116134149665:web:597234c98f7010166a2d60",
  measurementId: "G-EEDMNK4TX8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
