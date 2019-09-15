import React, { useEffect, useState } from "react";
import { Link } from "gatsby"; 

import Camera from '../components/camera';
import 'react-html5-camera-photo/build/css/index.css';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAsQPZmUAX-vWfxqAjjjW5RrzIyb1mTTIM",
  authDomain: "manhunt-9d5b4.firebaseapp.com",
  databaseURL: "https://manhunt-9d5b4.firebaseio.com",
  projectId: "manhunt-9d5b4",
  storageBucket: "manhunt-9d5b4.appspot.com",
  messagingSenderId: "467777965790",
  appId: "1:467777965790:web:7b3e42c8e9be8df9557c4f"
};

firebase.initializeApp(firebaseConfig);

const IndexPage = () => {
  const [currentGameState, updateCurrentGameState] = useState();
  useEffect(() => {
    firebase.database().ref('/game-1').on('value', (snapshot) => {
      updateCurrentGameState(snapshot.val());
    })

  }, [])

  if (currentGameState === undefined) {
    console.log("hey");
    return (<></>);
  }

  var sTable = document.getElementById("scoreboardTable");
  var playersTable = currentGameState.players;
  var sboard = []

  for (let [key, value] of Object.entries(playersTable)) {
    sboard.push(`${key}: ${value.status}`);
  }

  var scoreboardDisplay = sboard.join('\n');
  console.log(scoreboardDisplay);

  return (
   <>
      <SEO title="CAMHUNT"/>
      <h1 style={{
        paddingTop: '2em',
        textAlign: 'center',
        fontFamily: 'courier new',
        fontWeight: 'bold',
        color: '#cc3300'
      }}>Camhunt Cam</h1>

      <div className="App">
        <Camera />
      </div>

      <pre style={{
        fontFamily: 'Courier New',
        fontWeight: 'bold',
        color: '#e60000',
        fontSize: '1em'
      }}>{scoreboardDisplay}</pre>

   </>
  )
}

export default IndexPage
