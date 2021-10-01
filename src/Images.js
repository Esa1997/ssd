import React, { Component } from 'react';
import './Images.css';
import axios from 'axios';

class Images extends React.Component {
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

    componentDidMount(){
        let access_token = this.props.accessTkn;
        console.log(access_token);
        let id = "107798738333600";
        let url='https://graph.facebook.com/'+id+'?fields=photos{picture,likes.summary(true),created_time}&access_token='+this.props.accessTkn; //resource URI with user ID and access token
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
            console.log('error', response);
        }) 
    }

    render() {
        let imageUrlArray = this.state.imageUrlArray;
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