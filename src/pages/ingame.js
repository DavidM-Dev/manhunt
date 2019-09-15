import React from "react";
import { Link } from "gatsby"; 

import Camera from '../components/camera';
import 'react-html5-camera-photo/build/css/index.css';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const firebaseConfig = {
  apiKey: "AIzaSyAsQPZmUAX-vWfxqAjjjW5RrzIyb1mTTIM",
  authDomain: "manhunt-9d5b4.firebaseapp.com",
  databaseURL: "https://manhunt-9d5b4.firebaseio.com",
  projectId: "manhunt-9d5b4",
  storageBucket: "manhunt-9d5b4.appspot.com",
  messagingSenderId: "467777965790",
  appId: "1:467777965790:web:7b3e42c8e9be8df9557c4f"
};




const IndexPage = () => {

  return (
   <>
      <SEO title="MANHUNT"/>
      <h1>Camhunt: Ingame</h1>
      <div className="App">
        <Camera />
      </div>

      <table classname="scoreboardTable">
        <thead>
          <tr>
            <th>Player</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
          <tr>
            <td><i></i> No result</td>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>

   </>
  )
}



export default IndexPage
