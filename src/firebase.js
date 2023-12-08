import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBTz_NTJAyqtAAc5FolTzs8ZXcofWcF6M0',
  authDomain: 'mfp2-aeaf3.firebaseapp.com',
  projectId: 'mfp2-aeaf3',
  storageBucket: 'mfp2-aeaf3.appspot.com',
  messagingSenderId: '513565926379',
  appId: '1:513565926379:web:3c5adfa67f129a1db76fae',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
