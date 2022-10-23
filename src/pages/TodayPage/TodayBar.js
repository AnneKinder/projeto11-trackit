import styled from "styled-components";
import { useState } from "react";
import BlueTitle from "../../assets/styles/BlueTitle.js"



export default function TodayBar(props) {
  const {result} = props
  let [today, setToday] = useState({ day: "Segunda", date: "17/10" });

  return (
    <TodayBarSty>
     
      <BlueTitle>
        {" "}
        {today.day}, {today.date}
      </BlueTitle>


{result!==0 ? <div>{result}%</div> : <NothingSty>Nenhum hábito concluído ainda </NothingSty>}
      
    


      <SomeSty></SomeSty>
    </TodayBarSty>
  );
}

const TodayBarSty = styled.div`
  height: 70px;
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2px;
  margin: 8px 0;
  font-family: "Lexend Deca";

`;

const NothingSty = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #bababa;
`;

const SomeSty = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #8FC549;


`;
