import React, { useState } from "react";

import styled from "styled-components";

import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

import { AuthContext } from "../context/auth";


export default function App() {
  const [step, setStep] = useState(0);
  const {progressB, setProgress} = React.useContext(AuthContext)

//  // ${percentage}%



  // progresso  0 - 100
  let progress = step > 0 ? step / 4 : 0;

  // status "stopped" to "done"
  let percentage = 100 * progress;
  let status = step > 0 ? (step < 4 ? "In Progress" : "Done") : "Stopped";
  return (
    <div className="app">
      <ProCont>
      <div className="progress-container">
       
        <CircularProgressbar value={progressB} 
        text={
          
          `Hoje`     
         } 
        />
      </div>
      </ProCont>
      {/* <h2>Status: {status}</h2> */}
      <div className="action-container">
        {/* <button
          onClick={() => {
            setStep(step - 1);
          }}
          disabled={step === 0}
        >
          Previous
        </button> */}
        <button
          onClick={() => {
            setStep(step + 1);
          }}
          disabled={step === 4}
        >
          Next
        </button> 
      </div>
    </div>
  );
}

const ProCont = styled.div`


.progress-container {
    height: 110px;
    width: 110px;
    color:white;
	background-color:#52B6FF;
  border-radius: 100%;
  margin-bottom:30px;
  }
`