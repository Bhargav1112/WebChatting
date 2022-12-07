import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from '../firebase/auth'


export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push("/chats")
  }, [])
  // const app = firebase.initializeApp(firebaseConfig);
  // const auth = firebase.getAuth(app);

  // const ui = new firebaseui.auth.AuthUI(auth)

  // ui.start('#firebaseui-auth-container', {
  //   signInFlow: 'popup',
  //   signInOptions: [
  //     {
  //       provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //     },
  //     firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //   ],
  // });
  return (
    <div id="firebaseui-auth-container"></div>
  )
}
