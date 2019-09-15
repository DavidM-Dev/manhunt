import { Link } from "gatsby";
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const JoinPage = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <h1 style={{
        marginTop: '2em',
        padding: 10,
        height: 250,
        width: 250,
        fontSize: 36,
        textAlign: 'center'
    }}>Join Match</h1>

    <p>Enter match name</p>

    <input></input>

    <Link to="/pregame/"><Button style={{ // needs to send something to backend.
        margin: '3em',
        padding: 10,
        width: 250
    }} variant="danger">GO</Button></Link>

    <Link to="/homePage/"><Button style={{
        margin: 5,
        padding: 10,
        width: 250
    }} variant="danger">BACK</Button></Link>
  </div>
)

export default JoinPage;
