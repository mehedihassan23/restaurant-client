 import { initializeApp } from "firebase/app";
 
const firebaseConfig = {
  apiKey: import.meta.env.VITE_Api_Key,
  authDomain:  import.meta.env.VITE_Auth_Domain,
  projectId: import.meta.env.VITE_ProjetId,
  storageBucket: import.meta.env.VITE_Storage_Bucket,
  messagingSenderId: import.meta.env.VITE_Message_SenderId,
  appId: import.meta.env.VITE_AppId
};
export const app = initializeApp(firebaseConfig);