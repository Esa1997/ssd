import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";

const ReactFBPageRandomPhoto = (props) => {
  const postRandomPhoto = () => {
    axios.get('https://graph.facebook.com/101585198967501?fields=access_token&access_token='+props.access_tkn)
            .then( response => {
                let token = response.data.access_token;

                axios.post("https://graph.facebook.com/101585198967501/photos?", {
                  url: "https://source.unsplash.com/featured/?quote",
                  access_token: token
                })
                .then(
                  res => {
                    const result = res.data;
                    console.log(result);
                    alert("Success!");
                  },
                  error => {
                    console.log(error);
                  }
                );                

    });

  };

  return (
    <div className ='photoTitle'>
    
      Random Photo Generator
      
      <br />
      <br />
      <br />
      <br />
      <button className = "photobtn" onClick={() => postRandomPhoto()}>Post Photo</button>
    </div>
  );
};

export default ReactFBPageRandomPhoto;