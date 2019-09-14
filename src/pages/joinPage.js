import { Link } from "gatsby";
import React from "react";


const PregamePage = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <h1 style={{
        margin: 5,
        padding: 10,
        height: 250,
        width: 250,
        fontSize: 48
    }}>Join Game</h1>

    <p>Please enter the game key</p>

    <input></input>

    <Link to="/pregame/"><button style={{
        margin: 5,
        padding: 10,
        width: 250
    }} variant="primary">GO</button></Link>

    <Link to="/homePage/"><button style={{
        margin: 5,
        padding: 10,
        width: 250
    }} variant="primary">BACK</button></Link>
  </div>
)

export default PregamePage
