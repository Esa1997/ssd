import logo from './logo.jpg';
import image from './Images.js';
import axios from 'axios';
import React, { Component } from 'react';
import { getDefaultNormalizer } from '@testing-library/dom';
import './Navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: "",
            imageUrlArray: [
                "https://www.cdc.gov/healthypets/images/slider/dog-and-cat.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSg-zeC5cHjByHQHKyOjkRYt1IroeHWU911w&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwDUT66rGcuOz3urrDnrpYFWn5dMoWTm-Yg&usqp=CAU",
                "https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg",
                "https://i.pinimg.com/originals/05/fa/46/05fa46f1d2ed44354532b85324c607d3.jpg",                
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkzSW8qQUE1hSGxYSBwRIeBkIY8KkFLgwgDH8QwckYE1_h0IGg4SyurpMbO9k1NGJnYA&usqp=CAU",
                "https://cdn.statically.io/img/media.kitsu.io/manga/poster_images/40286/medium.jpg?1509353777",
                "https://media.istockphoto.com/vectors/eagle-emblem-vector-id1055078314?k=20&m=1055078314&s=170667a&w=0&h=WyHyMB2jEyHcZY2XboPdVAfjdsRc4Kkhs-0QOYXjWa0=",
                "https://thumbs.dreamstime.com/b/wellness-tree-logo-icon-design-template-vector-natural-127334115.jpg"
            ],
            showModal: false,
            popImageUrl: "",
            photosArray: []
        }
    }

    // componentDidMount(){
    //     alert("Came here");
    //     let access_token = "EAAsdP01K4ZBEBABDxywE3u42q7ytk4DfbopED4M1PapdPAqcOyJQT5UZCGnJNoUQMDByUtuFDAncOKXyRD25L3YDfQ5aQX9VZBufsBPrad5it3BmKyzOUNiItyqhEZCPOSjmhaeaSL5vsOhhyWweVhGNU3aHtOZBIY5GxyhC4BjHhXfYuXM2NofTWh1KZCFZBpmihH432tTVZA0Lkwl1fXsHGiXyJHlZAXlHqtnQX0Y5r9JO1GzNuF6gw";
    //     let id = "982923679229219"
    //     let url='https://graph.facebook.com/'+id+'?fields=photos{picture,likes.summary(true),created_time}&access_token='+access_token; //resource URI with user ID and access token
    //     axios({
    //         method:'get',
    //         url:url
    //     })
    //     .then(response =>{   //received response is processed using a foreach array. to extract images
    //         console.log("Message" +response)
    //         alert("Came here 1");
    //         let arr = response.data.photos.data
    //         let img=[];
    //         /* reading inner arrays using foreach loop */
    //         arr.forEach(element => {
    //             let tempImage = {
    //                 image:element.picture,
    //                 likes:element.likes.summary.total_count
    //             };
    //             img.push(tempImage);
    //             // if(arr.length !== 1){
    //                 // alert("Came here 3");
    //                 // console.log("arr" +arr)
    //                 // let innerArray = response.data.photos.data
    //                 // console.log("Message " +arr)
    //                 // alert(innerArray);
    //                 // innerArray.forEach(inElement => {
    //                 //     let tempImage = {
    //                 //         image:inElement.picture,
    //                 //         likes:inElement.likes.summary.total_count
    //                 //     };
    //                 //     img.push(tempImage); /* push images to album array */
    //                 // });
    //             // }
    //         });
    //         this.setState({
    //             photosArray: img /* set album array current state*/
    //         })
    //         image.loadImages();
    //     })
    //     .catch(response=>{ /* error handling */
    //         console.log(response);
    //     }) 
    // }

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
                        <a href='/'>Save to Drive</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href='/'>Log Out</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar