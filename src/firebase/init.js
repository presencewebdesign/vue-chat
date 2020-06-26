import firebase from "firebase"

const firebaseConfig = {
   apiKey: "AIzaSyAZaXOD0BQxC-G0uQ4mJ1veVYRSCYGfBH4",
   authDomain: "vue-chat-484b1.firebaseapp.com",
   databaseURL: "https://vue-chat-484b1.firebaseio.com",
   projectId: "vue-chat-484b1",
   storageBucket: "vue-chat-484b1.appspot.com",
   messagingSenderId: "227933113823",
   appId: "1:227933113823:web:3b91c212fbec76fca1086a",
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
