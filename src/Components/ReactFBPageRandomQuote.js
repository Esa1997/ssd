import React, { useState, useEffect } from "react";

import { render } from "react-dom";

import axios from "axios";



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

            access_token: "EAAMA46nKs3ABALBM52QFkg1tqaZBEaZCCbE8D8j0aghM5FNSYiinCvqwIj8i8vh90qit22r8x5dVLKWtFN4vmVZAoB0Y9y0ESLZC50EPZBzltffZAhc3e5pjhihOx1rrPpMM4UGT35g6F9EmPsFzRXPIpKPLSZArfL6qA2Qw7K2bGTlpKh2etU7pO4BXIrzsw6weCZBVGoCrr3806BqXpCV7"

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

        <div>

            {quote}

            <br />

            <br />

            <button onClick={() => postRandomQuote()}>Post Quote</button>

        </div>

    );



};



export default ReactFBPageRandomQuote;