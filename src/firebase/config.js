import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyB1F9d7239DWH6zNARxMCl1_rWlfr7qlU4",
  authDomain: "youssef-ayachi.firebaseapp.com",
  projectId: "youssef-ayachi",
  storageBucket: "youssef-ayachi.appspot.com",
  messagingSenderId: "795531705699",
  appId: "1:795531705699:web:5664c27caa818654662756"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const data = firebaseApp.firestore();

export {data}

  