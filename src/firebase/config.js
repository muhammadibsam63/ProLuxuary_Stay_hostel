// Firebase is stubbed out for now.
// When you're ready to wire up a real project:
//
// 1. npm install firebase
// 2. Uncomment the imports below
// 3. Drop your project config into a .env file (never commit real keys):
//      VITE_FIREBASE_API_KEY=...
//      VITE_FIREBASE_AUTH_DOMAIN=...
//      VITE_FIREBASE_PROJECT_ID=...
//      VITE_FIREBASE_STORAGE_BUCKET=...
//      VITE_FIREBASE_MESSAGING_SENDER_ID=...
//      VITE_FIREBASE_APP_ID=...
// 4. Replace the exported mocks in src/context/AuthContext.jsx with real
//    Firebase Auth calls (signInWithEmailAndPassword, createUserWithEmailAndPassword,
//    GoogleAuthProvider, etc). The context API (login/signup/logout/user) is already
//    shaped to drop straight in.

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "STUB_API_KEY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "STUB.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "STUB_PROJECT_ID",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "STUB.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "000000000000",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "STUB_APP_ID",
};

export const isFirebaseConfigured = firebaseConfig.apiKey !== "STUB_API_KEY";

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);

export default firebaseConfig;
