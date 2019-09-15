import { Link } from "gatsby"
import React from "react"

const HomePage = () => (
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
    }}>CamHunt</h1>

    <img src ={"camhunt.png"} alt={"camhunt logo"}></img>

    <Link to="/pregame"><button style={{
        margin: 5,
        padding: 10,
        width: 250
    }} variant="primary">CREATE</button></Link>

    <Link to="/joinPage"><button style={{
        margin: 5,
        padding: 10,
        width: 250
    }} variant="primary">JOIN</button></Link>
  </div>
)

export default HomePage
