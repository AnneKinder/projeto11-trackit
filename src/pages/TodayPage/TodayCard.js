import React from "react";
import styled from "styled-components";
import TextSty from "../../assets/styles/TextSty";
import { IonIcon } from "@ionic/react";
import { useState } from "react";
import { Checkbox } from "react-ionicons";
import axios from "axios";


export default function TodayCard(props) {
  const { name, sequence, record, id, isDone, token, checkHabits, setCheckHabits } = props;
 

  let bodyCheck= {done:true}
  let bodyUncheck={done:false}

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };




  function BoxAction() {

    if (isDone===true) {
   
      axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, bodyUncheck, config)
      .then()
      .catch((err) => console.log(err.data))
      setCheckHabits(checkHabits.filter((item) => item.id !==id));
      
    } else {

      axios
        .post(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, bodyCheck,
          config
        )
        .then((res) => {
          setCheckHabits([...checkHabits, id]);
          
        })
        .catch((err) => console.log(err.data));
    }
  }

  return (
    <TodayCardSty>
      <div className="left">
        <TextSty> {name}</TextSty>
        <div className="info"> Sequência atual: {sequence} dias</div>
        <div className="info"> Seu recorde: {record} dias</div>
      </div>
      <CheckSty
        colorprop={isDone===true ? "#8FC549" : "#EBEBEB"}
        onClick={() => BoxAction()}
      >
        <IonIcon icon="checkbox" />
      </CheckSty>
    </TodayCardSty>
  );
}

const TodayCardSty = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  width: 340px;
  height: 94px;
  left: 18px;
  top: 177px;
  border-radius: 5px;
  padding: 13px;
  margin-top: 10px;

  .info {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
    margin-top: 4px;
  }
`;

const CheckSty = styled.div`
  font-size: 72px;
  color: ${(props) => props.colorprop};
  border-radius: 5px;
`;
