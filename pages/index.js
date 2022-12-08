import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { auth } from '../firebase/auth'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

export default function Home() {
  const router = useRouter()
  // useEffect(() => {
  //   router.push("/chats")
  // }, [])

  useEffect(() => {
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)

    ui.start('#firebaseui-auth-container', {
      signInFlow: 'popup',
      signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        },
      ],
      callbacks: {
        signInSuccessWithAuthResult: function (authResult) {
          if (authResult) {
            router.push("/chats")
          }
          return true
        }
      }
    });
  }, [])
  return (
    <div id="firebaseui-auth-container"></div>
  )
}
