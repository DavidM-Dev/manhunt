import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const PregamePage = () => (
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
    }}>Pregame Setup</h1>

    <p>Take Yo Pictcha!!<br></br>Enter a nickname</p>

    <input></input>

    <Link to="/ingame/"><Button style={{
        margin: 5,
        padding: 10,
        width: 250
    }} variant="danger">START</Button></Link>

    <Link to="/homePage/"><Button style={{
        margin: 5,
        padding: 10,
        width: 250
    }} variant="danger">GO HOME</Button></Link>
  </div>
)

export default PregamePage
