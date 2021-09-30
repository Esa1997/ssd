import logo from './logo.png';
import image from './Images.js';
import axios from 'axios';
import React, { Component } from 'react';
import { getDefaultNormalizer } from '@testing-library/dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: "",
            showModal: false,
            popImageUrl: "",
            photosArray: []
        }
    }

    render(){
        console.log(this.props.photosArray)
        return (
            <div className={'sideNav'}>
                <img src={logo} alt='Logo' className='logo' /> 
                <ul>
                    <li>
                        <a href='/'>Most Liked</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href='/'>Custom Made</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a onClick={this.getImage}>Save to Drive</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar