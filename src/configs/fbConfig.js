import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDa0vIFIocFiOG9E2w0jbyzfPu_nWY2-gI',
  authDomain: 'todo-bdcfc.firebaseapp.com',
  projectId: 'todo-bdcfc',
  storageBucket: 'todo-bdcfc.appspot.com',
  messagingSenderId: '364198639456',
  appId: '1:364198639456:web:8725b136fafbf782e2d005',
}

firebase.initializeApp(firebaseConfig)

firebase.firestore()

export default firebase
