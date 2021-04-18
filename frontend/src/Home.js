import './styles/Home.css';
import './styles/index.css';
import truebg from './assets/GroupedLandingBG.png';
import bg from './assets/LandingBG.png';
import whaticon from './assets/GuyonLaptop.png';
import dataicon from './assets/DataPointsIcon.png';
import { Router, Link } from 'react-router-dom'
import { render } from '@testing-library/react';

import NavBar from './components/NavBar'

function Home(props) {
  return (
    <>
      <head>
        <title>Project Lore</title>
      </head>
    <div className="Home">
      <NavBar />
      <div id="landing">
        
        <img id="landing-bg-dimensions" src={truebg}></img>
        <div id="landing-text-container">
            <h1 id="landing-heading">Become your <br></br> best doctor.</h1>
            <span id="landing-button-container">
              <button class="filled-button">GET ACCESS</button>
              <button class="empty-button">LEARN MORE</button>
            </span>
          </div>
      </div>

      <div className="about-info" id="what-are-we">
        <div className="what-are-we-container">
          <h1>What are we?</h1>
          <p fontFamily="Poppins" w="25vw">A data generating website that provides reliable, trustworthy healthcare resources through annotated medical research.</p>
        </div>
        <img id="whaticon" src={whaticon}></img>
      </div>

      <div className="about-info" id="why-us">
      <img id="dataicon" src={dataicon}></img>
        <div className="what-are-we-container">
          <h1>Why Us?</h1>
          <p fontFamily="Poppins" w="25vw">Annotators can create and tag the data to target patients with the most relevant conditions and give them concise, reliable advice on treatment. </p>
        </div>
        
      </div>

    </div>
    </>
  );
}

export default Home;
