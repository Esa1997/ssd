import { useState } from 'react';
import Navbar from "./Navbar";
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgLogOff } from "react-icons/cg";
import Images from './Images';
import './App.css'

function App() {
  const [ showNav, setShowNav ] = useState(false);
  return (
    <div className="App">
      <header>
        <h1>Facebook Collage Maker</h1>
        <div className='icon-row'>
          <GiHamburgerMenu/>
          <CgLogOff />
        </div>
      </header>

      <Navbar/>
      <Images />
    </div>
  );
}

export default App;
