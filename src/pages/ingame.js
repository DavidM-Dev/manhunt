import React, { useEffect, useState } from "react";
import 'react-html5-camera-photo/build/css/index.css';
import Camera from '../components/camera';
import { subscribeToGameUpdates } from '../utils/firebase-utils';

const IndexPage = () => {
  const [currentGameState, updateCurrentGameState] = useState();
  useEffect(() => {
    subscribeToGameUpdates(updateCurrentGameState);
  }, [])

  if (currentGameState === undefined) {
    return (<></>); //TODO: loading icon
  }

  var playersTable = currentGameState.players;
  var sboard = []

  for (let [key, value] of Object.entries(playersTable)) {
    sboard.push(`${key}: ${value.status}`);
  }

  var scoreboardDisplay = sboard.join('\n');

  return (
   <>
      <h1 style={{
        paddingTop: '1em',
        textAlign: 'center',
        color: '#cc3300'
      }}>Camhunt</h1>
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
