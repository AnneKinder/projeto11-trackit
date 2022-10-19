import styled from "styled-components";
import NavBar from "../../components/NavBar.js";
import AddBar from "../../components/AddBar.js";
import Footer from "../../components/Footer.js";
import ScreenStyle from "../../assets/styles/ScreenStyle.js";
import MainStyle from "../../assets/styles/MainStyle.js";

function HabitsPage() {
  return (
    <ScreenStyle>
      <NavBar />
      <MainStyle>
        <AddBar />
        <FeedSty>
          <h2>
            {" "}
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!{" "}
          </h2>
        </FeedSty>
        <Footer />
      </MainStyle>
    </ScreenStyle>
  );
}

const FeedSty = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    width: 338px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;

export default HabitsPage;
