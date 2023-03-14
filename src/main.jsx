import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: "AIzaSyDBfqF0oqOqWsOXf6JP02s6eqz3GuN3F9M",
  authDomain: "florita-863e8.firebaseapp.com",
  projectId: "florita-863e8",
  storageBucket: "florita-863e8.appspot.com",
  messagingSenderId: "774649982316",
  appId: "1:774649982316:web:a00be0b5badd768afb1749"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
