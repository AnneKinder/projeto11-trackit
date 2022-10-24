import React, { useState } from "react";

import styled from "styled-components";

import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

import { AuthContext } from "../context/auth";

export default function App() {
  const [step, setStep] = useState(0);
  const { result, setResult } = React.useContext(AuthContext);

  let progress = step > 0 ? step / 4 : 0;

  let percentage = 100 * progress;
  let status = step > 0 ? (step < 4 ? "In Progress" : "Done") : "Stopped";
  return (
    <div className="app">
      <ProCont>
        <div className="progress-container">
          <CircularProgressbar value={result} text={`Hoje`} />
        </div>
      </ProCont>

      <div className="action-container"></div>
    </div>
  );
}

const ProCont = styled.div`
  .progress-container {
    height: 110px;
    width: 110px;
    color: white;
    background-color: #52b6ff;
    border-radius: 100%;
    margin-bottom: 30px;
  }
`;
