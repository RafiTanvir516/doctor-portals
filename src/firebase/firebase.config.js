import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCI68lrnsBK0H_TrRTHqdTNF7H9upgwMkw",
  authDomain: "doctors-portals-2aeb9.firebaseapp.com",
  projectId: "doctors-portals-2aeb9",
  storageBucket: "doctors-portals-2aeb9.appspot.com",
  messagingSenderId: "105541493057",
  appId: "1:105541493057:web:7e93918ef98973f38c01c0",
  measurementId: "G-KECF0PLRPT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
