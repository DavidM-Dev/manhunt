import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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
    }}>Pregame Setup</h1>

    <p>Take Yo Pictcha!!<br></br>Wass yo name boi??</p>

    <input></input>

    <button style={{
        margin: 5,
        padding: 10,
        width: 250
    }} variant="primary">START</button>

    <Link to="/homePage/"><button style={{
        margin: 5,
        padding: 10,
        width: 250
    }} variant="primary">GO HOME</button></Link>
  </div>
)

export default PregamePage
