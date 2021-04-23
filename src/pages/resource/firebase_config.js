import firebase from "firebase";

//personal
// var firebaseConfig = {
//   apiKey: "AIzaSyDaEY4WE3HKzdWoDwPNvrmlqfHW-GmO3WQ",
//   authDomain: "sv-last-min.firebaseapp.com",
//   projectId: "sv-last-min",
//   storageBucket: "sv-last-min.appspot.com",
//   messagingSenderId: "177396710542",
//   appId: "1:177396710542:web:bed6bccab9ed95fff49ddf"
// };

//project
var firebaseConfig = {
    apiKey: "AIzaSyBh7z5O1nv520sWnhNAvUmJY-hUSibpJNQ",
    authDomain: "supervisor-todo.firebaseapp.com",
    projectId: "supervisor-todo",
    storageBucket: "supervisor-todo.appspot.com",
    messagingSenderId: "340906581180",
    appId: "1:340906581180:web:f719b9be24bd31659184b9"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const storage = firebase.storage();
  
  export default fire;

  export {db, storage };