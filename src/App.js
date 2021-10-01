import React from 'react';
import Facebook from "./Components/Facebook";
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgLogOff } from "react-icons/cg";
import './App.css';

function App() {
  return (
    <div >

      <div>
        <h1>Facebook Collage Maker</h1> 
      </div>              
  
      <div className='fbBtn'>
        <Facebook />
      </div>
    </div>
  );
}

export default App;