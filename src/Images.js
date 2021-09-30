import React, { Component } from 'react';
import './Images.css';
import axios from 'axios';

class Images extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: "",
            showModal: false,
            popImageUrl: "",
            photosArray: []
        }
    }

    componentDidMount(){
        let access_token = "EAAsdP01K4ZBEBAL18zqMWrxPuxeGfpMrkWbi84TDAJnXe9afHGzI5nZB5HeC2brQcVcnKeBR3Hv3YQiuFzWhIZCON5CyH8WJrhvZAGGZAstr71NedDR4N7qHAb7VXACpW8b3EnpgDw0sMNAQqUDYwElVrJz7vlW4gARrAILnl0D4tRUcK4qNkoJ9eTsXcmx3aHCDuJjqDtiy2Y7pc2fZClYb8AtUNc1VeKkoyt7k0MZC2BUlqts8yXa";
        let id = "982923679229219"
        let url='https://graph.facebook.com/'+id+'?fields=photos{picture,likes.summary(true),created_time}&access_token='+access_token; //resource URI with user ID and access token
        axios({
            method:'get',
            url:url
        })
        .then(response =>{   //received response is processed using a foreach array. to extract images
            let arr = response.data.photos.data
            let img=[];
            /* reading inner arrays using foreach loop */
            arr.forEach(element => {
                let tempImage = {
                    image:element.picture,
                    likes:element.likes.summary.total_count
                };
                img.push(tempImage);
            });
            this.setState({
                photosArray: img /* set album array current state*/
            })
        })
        .catch(response=>{ /* error handling */
            console.log(response);
        })
    }

    render() {
        const images = this.state.photosArray.map((image, index) => {
            return(
                <img
                className='singleImage'
                src={image.image}
                key={index}
            />
            )
        });
        return (
            <div className="container">
                {images}              
            </div>
          );
    }
    
  }
  
  const images = new Images();
  export default Images;