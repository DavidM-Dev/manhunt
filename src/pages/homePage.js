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

    <img src ={require("../../static/camhunt2.png")} style={{
    }}></img>
    <Link to="/createPage/"><Button style={{
        margin: '1em',
        padding: 10,
        width: 250
    }} variant="danger">CREATE MATCH</Button></Link>

    <Link to="/joinPage/"><Button style={{
        marginBottom: '0em',
        padding: 10,
        width: 250
    }} variant="danger">JOIN MATCH</Button></Link>
  </div>
)

export default PregamePage
