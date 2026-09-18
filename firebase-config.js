// Firebase config for el-birthday-card

const firebaseConfig = {
    apiKey: "AIzaSyBXgZZCBjR0vUrVZflAXP3CtMP_3UByftE",
    authDomain: "el-birthday-card.firebaseapp.com",
    projectId: "el-birthday-card",
    storageBucket: "el-birthday-card.firebasestorage.app",
    messagingSenderId: "1036126915621",
    appId: "1:1036126915621:web:4b5594d4b68ce20dbac3cc"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();    