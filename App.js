import React from "react";
import Home from "./Home";
import Pic from './img/pix11.jpg'
import Footer from "./footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="profile_img">
        <img src={Pic} alt="my pix"/>
      </div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
