import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

import { getStorage } from
"https://www.gstatic.com/firebasejs/12.2.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "ecoloop-ai-824b2.firebaseapp.com",
  projectId: "ecoloop-ai-824b2",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
