import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDEMbwde8nIv6mv9NLXVMDnx_JNV89cpsQ",
    authDomain: "catalog-bd1a1.firebaseapp.com",
    databaseURL: "https://catalog-bd1a1.firebaseio.com",
    projectId: "catalog-bd1a1",
    storageBucket: "catalog-bd1a1.appspot.com",
    messagingSenderId: "533285887375",
    appId: "1:533285887375:web:14713f23680c388816fffa"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;