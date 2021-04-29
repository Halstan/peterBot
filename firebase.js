const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/firestore')
require('firebase/storage')

const firebaseConfig = {
  apiKey: 'AIzaSyDDmtT6ObbAMnESIMo9ey-ijJ9DypSwMxU',
  authDomain: 'lost-time-4ea04.firebaseapp.com',
  projectId: 'lost-time-4ea04',
  storageBucket: 'lost-time-4ea04.appspot.com',
  messagingSenderId: '177355259435',
  appId: '1:177355259435:web:6e729d3116b88066b8b46e'
}
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

module.exports = {db, auth, storage, firebase}
