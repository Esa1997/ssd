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
        //generate url
        let url='https://graph.facebook.com/'+this.props.id+'?fields=photos{picture,likes.summary(true)}&access_token='+this.props.accessTkn;
        //make API call
        axios({
            method:'get',
            url:url
        })
        .then(response =>{   //response is processed using a foreach loop to extract photos and likes count
            let arr = response.data.photos.data
            let img=[];
            arr.forEach(element => {
                let tempImage = {
                    image:element.picture,
                    likes:element.likes.summary.total_count
                };
                img.push(tempImage); //add to temporary array
            });

            //sort photos from highest likes to least
            let sortedImages = img.sort((imageOne, imageTwo) => imageOne.likes < imageTwo.likes ? 1 : -1)
            //if the user has more than 9 photos, get only the most liked 9 photos
            if(sortedImages.length > 9){
                sortedImages = sortedImages.slice(0,9)
            }
            //set result array to state
            this.setState({
                photosArray: sortedImages /* set album array current state*/
            })
        })
        .catch(response=>{ //handle errors
            console.log('error', response);
        }) 
    }

    render() {
        //map images to render
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