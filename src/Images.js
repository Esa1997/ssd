import React, { Component } from 'react';
import './Images.css'

class Images extends Component {
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
            popImageUrl: ""
        }
    }
    render() {
        let imageUrlArray = this.state.imageUrlArray;
        const images = imageUrlArray.map((url, index) => {
            return(
                <img
                className='singleImage'
                src={url}
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
  
  export default Images;