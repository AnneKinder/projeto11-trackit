import styled from "styled-components";
import TextSty from "../../assets/styles/TextSty";
import { IonIcon } from "@ionic/react";
import { useState } from "react";
import { Checkbox } from "react-ionicons";
import axios from "axios";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

export default function TodayCard(props) {
  const {name, sequence, record, id, token} = props
  let [boxColor, setBoxColor] = useState("#ebebeb")
  let [checkHabits, setCheckHabits] = useState([])



  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };


function BoxAction(){


if (checkHabits.includes(id)){
  alert ("ja foi enviado") // fazer requisiçao de delete aqui
}else {

  setCheckHabits([...checkHabits, id])

  axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, config)
  .then((res)=>{
    console.log("enviou check pra api")
   
  })
  .catch((err)=> console.log(err.data))
  

}
}


  return (
    <TodayCardSty>
      <div className="left">
        <TextSty> {name}</TextSty>
        <div className="info"> Sequência atual: {sequence} dias</div>
        <div className="info"> Seu recorde: {record} dias</div>
      </div>
      <CheckSty colorprop= {checkHabits.includes(id) ? "#8FC549" : "#E7E7E7"}   
      onClick={()=> BoxAction()}>
        <IonIcon icon="checkbox"  />
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
  margin-top:10px;

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
`
