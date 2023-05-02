import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNQy-w5HOqXdbbNHm1bMCqylV9-Ln5z6o",
  authDomain: "fav-songs-2a129.firebaseapp.com",
  projectId: "fav-songs-2a129",
  storageBucket: "fav-songs-2a129.appspot.com",
  messagingSenderId: "921519324815",
  appId: "1:921519324815:web:153a43523cb4ce3e0d7afa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
