import React, { useState, useEffect } from "react";

import { render } from "react-dom";

import axios from "axios";
import { CgAppleWatch } from "react-icons/cg";
import  '../App.css'



const ReactFBPageRandomQuote = () => {

    const [quote, setQuote] = useState("");



    useEffect(() => {

        axios.get("https://api.quotable.io/random").then(res => {

          const result = res.data;

          console.log(result.content);

          setQuote(result.content);

        });

      }, []);



    const postRandomQuote = () => {

        axios.post("https://graph.facebook.com/101585198967501/feed?", {

            message: quote,

            access_token: "EAAMA46nKs3ABAMJJSY5wK0BavoAIvPyXuAZAspbLoICBX5BjCAhJUEqiPIzhlHmiQZCPwMdkyzEp1l2IgxyKclWL1Yecr3t6Q5dBkckuUSoGkRKzzxeaj5U1GFtHwdN3DjLDfTSVGXEPJPsXl5cZCm1kJ3y08V4gFoDma2r0YZCXXhKZBxrcbiWh2ZCtk3bEd7PP8lx8cOGhfuVDWSMQbi"

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

    };



    return (

        <div className = 'RandomQuotes'>

            {quote}

            <br />
            <br/>
            <br/>
            <br />
            <div> 
                <button className = "postbtn" onClick={() => postRandomQuote()}>Post Quote</button>
            </div>
            

        </div>

    );



};



export default ReactFBPageRandomQuote;