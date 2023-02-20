import firebase from "firebase";


const firebaseConfig = {
  apiKey: meta.env.VITE_API_KEY,
  authDomain: meta.env.VITE_AUTH_DOMAIN,
  projectId: meta.env.VITE_PROJECT_ID,
  storageBucket: meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: meta.env.VITE_MESSAGING_SENDER_ID,
  appId: meta.env.VITE_APP_ID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const data = firebaseApp.firestore();

export {data}

  