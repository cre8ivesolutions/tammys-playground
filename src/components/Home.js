// import logo from "./logo.svg";
import React from "react";
import "../App.css";
import Welcome from "./Welcome";
// import UseSetState from "../components/useState";
// import styled from "styled-components";
// import Navigation from "./components/Navigation";

// const StyledButton = styled.button`
//   display: inline-block;
//   border-radius: .75em;
//   padding: 0.5rem 0;
//   margin: 0.5rem 1rem;
//   width: 9rem;
//   background: lightblue;
//   color: blue;
//   border: .5em solid mediumblue;
//   `;

//   // ${props => props.primary ? "css"`
//   //   background: white;
//   //   color: black;}

export default function Home () {
    return(
        <div className="homepage">
            <br/>
            <header> Home Sweet Home! This is the header.
            </header>
            <Welcome/>
            <br/>
        </div>
    )

}