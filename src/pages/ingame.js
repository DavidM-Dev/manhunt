import React from "react";
import { Link } from "gatsby"; 

import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  console.log(Camera);
  return (
   <>
      <SEO title="MANHUNT"/>
      <h1>Manhunt: Ingame</h1>
      <div className="App">
        <Camera
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
        />
      </div>
   </>


  )
}




export default IndexPage
