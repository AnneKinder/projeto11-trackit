import styled from "styled-components";
import TextSty from "../../assets/styles/TextSty";
import { IonIcon } from "@ionic/react";

export default function TodayCard() {
  const today = { day: "Segunda", date: "17/10" };
  let sequence = "5";
  let record = "7";

  return (
    <TodayCardSty>
      <div className="left">
        <TextSty> io </TextSty>
        <div className="info"> Sequência atual: {sequence} dias</div>
        <div className="info"> Seu recorde: {record} dias</div>
      </div>
      <div className="check">
        <IonIcon icon="checkbox" />
      </div>
    </TodayCardSty>
  );
}

const TodayCardSty = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #FFFFFF;
  width: 340px;
  height: 94px;
  left: 18px;
  top: 177px;
  border-radius: 5px;
  padding: 13px;

  .info {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
    margin-top: 4px;
  }

  .check {
    font-size: 72px;
    color: #ebebeb;
    border-radius: 5px;
  }
`;
