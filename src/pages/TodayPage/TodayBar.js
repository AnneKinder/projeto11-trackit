import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { AuthContext } from "../../context/auth.js";
import BlueTitle from "../../assets/styles/BlueTitle.js";
import DAYNAME from "../../constants/DAYNAME.js";

export default function TodayBar() {
  const { result, setResult } = React.useContext(AuthContext);
  const date = new Date();
  const todayDate = date.getDate();
  const todayWeek = date.getDay();
  const [today, setToday] = useState({
    day: DAYNAME[todayWeek],
    date: todayDate,
  });

  return (
    <TodayBarSty>
      <BlueTitle>
        {today.day}, {today.date}
      </BlueTitle>

      {isNaN(result) ? (
        <NothingSty>Nenhum hábito concluído ainda </NothingSty>
      ) : result !== 0 ? (
        <SomeSty>{result}% dos hábitos concluídos</SomeSty>
      ) : (
        <NothingSty>Nenhum hábito concluído ainda </NothingSty>
      )}
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
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #8fc549;
  margin-top: 8px;
`;
