import React, { useState, useEffect } from "react";

import { render } from "react-dom";

import axios from "axios";
import { CgAppleWatch } from "react-icons/cg";
import  '../App.css'



const ReactFBPageRandomQuote = (props) => {

    const [quote, setQuote] = useState("");



    useEffect(() => {

        axios.get("https://api.quotable.io/random").then(res => {

          const result = res.data;

          console.log(result.content);

          setQuote(result.content);

        });

      }, []);



    const postRandomQuote = () => {
        axios.get('https://graph.facebook.com/101585198967501?fields=access_token&access_token='+props.access_tkn)
            .then( response => {
                let token = response.data.access_token;
                axios.post("https://graph.facebook.com/101585198967501/feed?", {
                    message: quote,
                    access_token: token
                }).then(
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

        <div className = 'photoTitle'>

            {quote}

            <br />
            <br/>
            <br/>
            <br />
            <div> 
                <button className = "photobtn" onClick={() => postRandomQuote()}>Post Quote</button>
            </div>
            

        </div>

    );



};



export default ReactFBPageRandomQuote;