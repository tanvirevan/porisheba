/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBf8JfZJ8kYXEr4Kd6dJn0LwiCzbnHx_jM",
  authDomain: "porisheba.firebaseapp.com",
  projectId: "porisheba",
  storageBucket: "porisheba.appspot.com",
  messagingSenderId: "841077587162",
  appId: "1:841077587162:web:7b3f864b829cc7ecf5b9e3"
};



const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export {app, auth};