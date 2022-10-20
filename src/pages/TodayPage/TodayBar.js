import styled from "styled-components";

export default function TodayBar() {
  const today = { day: "Segunda", date: "17/10" };

  return (
    <TodayBarSty>
      <h1>
        {" "}
        {today.day}, {today.date}
      </h1>
      <NothingSty>Nenhum hábito concluído ainda </NothingSty>
      <SomeSty></SomeSty>
    </TodayBarSty>
  );
}

const TodayBarSty = styled.div`
  box-sizing: border-box;
  height: 70px;
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  font-family: "Lexend Deca";

  h1 {
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
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
