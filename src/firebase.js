import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAIKdTeLdmN3e_iaDaHqh9h-cA9vWb4GYw",
  authDomain: "task-management-a01f8.firebaseapp.com",
  projectId: "task-management-a01f8",
  storageBucket: "task-management-a01f8.appspot.com",
  messagingSenderId: "400110594637",
  appId: "1:400110594637:web:2ce662de39c6ee290d0a04"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const signOut = () => auth.signOut(); 
export { app, auth, signOut };