import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAB3RysnmfMLa_FYkCXKaB0DxsrYDYI3K0",
  authDomain: "chat-app-9f0c2.firebaseapp.com",
  projectId: "chat-app-9f0c2",
  storageBucket: "chat-app-9f0c2.appspot.com",
  messagingSenderId: "717599914232",
  appId: "1:717599914232:web:e6b5a085bd52087f33a30d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()



