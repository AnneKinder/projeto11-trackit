import React from "react";
import styled from "styled-components";
import {LoaderContainer} from "./styles.js"

import spin from "../../assets/img/ellipsis.gif"

export default function Loader(){
    return(
        <LoaderContainer>
        <img src={spin} alt="loader" />
        </LoaderContainer>
    )
}



const LoaderContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.1);
position: absolute;
height: 100vh;
width:100vw;
top:0;
left:0;
`
