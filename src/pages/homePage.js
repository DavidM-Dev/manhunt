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
        height: 150,
        width: 250,
        fontSize: 48
    }}>CamHunt</h1>

    <image>Image</image>

    <button style={{
        margin: 5,
        padding: 10,
        width: 250
    }} variant="primary">CREATE</button>
    <button style={{
        margin: 5,
        padding: 10,
        width: 250
    }} variant="primary">JOIN</button>
  </div>
)

export default PregamePage
