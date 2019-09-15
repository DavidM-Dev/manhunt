import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const endgame = () => (
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
    }}>Game Over</h1>

    <img src={"camhunt.png"} />

    <Link to="/???/"><button style={{
        margin: 5,
        padding: 10,
        width: 250
    }} variant="primary">EXIT</button></Link>

    <Link to="/homePage/"><button style={{
        margin: 5,
        padding: 10,
        width: 250
    }} variant="primary">GO HOME</button></Link>
  </div>
)

export default endgame
