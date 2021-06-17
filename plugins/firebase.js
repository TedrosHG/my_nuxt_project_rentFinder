import firebase from "firebase/app";
//import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAwoPFADGIHCQO3Bbltq-aC9wuEKEHy368",
    authDomain: "fir-nuxt1.firebaseapp.com",
    projectId: "fir-nuxt1",
    storageBucket: "fir-nuxt1.appspot.com",
    messagingSenderId: "698017423400",
    appId: "1:698017423400:web:6388c254478200aaaa551d",
    measurementId: "G-EQP90117HR"
  };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export { timestamp };
// export default firebaseApp.firestore();


  // Initialize Firebase
// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''

// export const auth = firebase.auth()
// export default firebase




//   let app = null;
//   if(!firebase.apps.length){
//       // Initialize Firebase
//       app = firebase.initializedApp(firebaseConfig);
//   }

//   export default firebase;

if (!firebase.apps.length) {   
    firebase.initializeApp(firebaseConfig)
    firebase.firestore().settings({timestampsInSnapshots: true})
}
//const db = firebase.firestore()
export default firebase.firestore()
 

