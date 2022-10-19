import styled from "styled-components";
import TextSty from "../../assets/styles/TextSty.js";

export default function NoHabit() {
  return (
    <NoHabitSty>
      <TextSty>
        {" "}
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!{" "}
      </TextSty>
    </NoHabitSty>
  );
}

const NoHabitSty = styled.div`
  width: 338px;
  margin: 35px 0 35px 0;
`;
