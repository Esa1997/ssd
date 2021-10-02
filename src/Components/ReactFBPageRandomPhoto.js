import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";

const ReactFBPageRandomPhoto = () => {
  const postRandomPhoto = () => {
    axios
      .post("https://graph.facebook.com/101585198967501/photos?", {
        url: "https://source.unsplash.com/featured/?quote",
        access_token:
          "EAAMA46nKs3ABAFw24J9aMMX9ucWJHGGZBy4tfSGWllQgg1F9BqN0QIbCWUEZASNbWVybcymhuwZAzf620uDZAG1RxvwNgNEPJOxWNHxO0ZCpHhnA9XKV29LLJ9osKKOD6ClSa3M0syIKK6zksqxx15mQfgwNxzUZBbQwnLIWIcBr7vCZBo4FPpZBPnx55GgLcZAv22Pf4EMby70W8lNt4fUvr"
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