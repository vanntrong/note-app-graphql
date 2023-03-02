// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAa0GTc04gYE0xiWt73PNomFgUHwDTDTa8",
  authDomain: "note-app-e00a6.firebaseapp.com",
  projectId: "note-app-e00a6",
  storageBucket: "note-app-e00a6.appspot.com",
  messagingSenderId: "302663798253",
  appId: "1:302663798253:web:c3546e9874ecb2686f6be4",
  measurementId: "G-SD8D5C00B6",
};

export const app = initializeApp(firebaseConfig);
getAnalytics(app);
