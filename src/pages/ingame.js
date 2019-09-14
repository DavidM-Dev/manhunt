import React from "react";
import { Link } from "gatsby"; 

import Camera from '../components/camera';
import 'react-html5-camera-photo/build/css/index.css';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
   <>
      <SEO title="MANHUNT"/>
      <h1>Manhunt: Ingame</h1>
      <div className="App">
        <Camera />
      </div>
      
      <table class="Scoreboard">
        <tr>
          <td>Player</td>
          <td>Status</td>
        </tr>
        <tr>
          <td>Mr. Goose</td>
          <td>INFECTED</td>
        </tr>
      </table>
   </>
  )
}

export default IndexPage
