// ==============================
// 🔥 Firebase App Configuration
// ==============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ==============================
// 🔑 Firebase Config
// ==============================

const firebaseConfig = {
  apiKey: "AIzaSyCaOGd5rcqbBSUMTMGqObmIwyNUkASDbDQ",
  authDomain: "chic-shopping-65c05.firebaseapp.com",
  projectId: "chic-shopping-65c05",
  storageBucket: "chic-shopping-65c05.firebasestorage.app",
  messagingSenderId: "226063534622",
  appId: "1:226063534622:web:f3e61ae68ddf064c0f3c0f"
};

// ==============================
// 🚀 Init
// ==============================

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exponer Firebase
window.db = db;
window.collection = collection;
window.addDoc = addDoc;
window.getDocs = getDocs;
window.deleteDoc = deleteDoc;
window.doc = doc;
window.setDoc = setDoc;
window.getDoc = getDoc;
window.updateDoc = updateDoc;

// ==============================
// 🖼 Imgbb
// ==============================

const IMGBB_API_KEY = "9b9d3117702c06928b41f8321a9138ad";

async function uploadToImgbb(file) {
  const fd = new FormData();
  fd.append("image", file);

  const res = await fetch(
    `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
    { method: "POST", body: fd }
  );

  const json = await res.json();
  if (!json.success) throw new Error("Error Imgbb");

  return json.data.url;
}

window.uploadToImgbb = uploadToImgbb;

console.log("🔥 Firebase conectado");
console.log("🖼 Imgbb listo");
