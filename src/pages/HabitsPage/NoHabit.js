import styled from "styled-components";

export default function NoHabit() {
  return (
    <NoHabitSty>
      Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
      começar a trackear! 
      </NoHabitSty>
  );
}

const NoHabitSty = styled.div`
  width: 338px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #666666;
  margin-top: 20px;
`;
