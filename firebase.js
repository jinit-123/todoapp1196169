// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDsjTO9s-qkgQyKTUBqcHMCMktviM8Zy8M",
  authDomain: "todoapp1196169.firebaseapp.com",
  projectId: "todoapp1196169",
  storageBucket: "todoapp1196169.appspot.com",
  messagingSenderId: "739954675907",
  appId: "1:739954675907:web:bcbfb22c234181d7c31276"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };