import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby";
import React from "react";
import Button from 'react-bootstrap/Button';
import { setupGame } from "../utils/backend-calls";


const HomePage = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center' // TODO: need this to be 100% height, so that I can add a gradient background.
  }}>
    <img src ={"camhunt2.png"} alt={"camhunt logo"} />
    <Link to="/createPage"><Button style={{
        margin: '1em',
        padding: 10,
        width: 250
    }} variant="danger">CREATE GAME</Button></Link>

    <Link to="/joinPage"><Button style={{
        marginBottom: '0em',
        padding: 10,
        width: 250
    }} variant="danger">JOIN GAME</Button></Link>
  </div>
)

export default HomePage
