import styled from "styled-components";
import NavBar from "../../components/NavBar.js";
import Footer from "../../components/Footer.js";
import ScreenStyle from "../../assets/styles/ScreenStyle.js";
import MainStyle from "../../assets/styles/MainStyle.js";
import TextSty from "../../assets/styles/TextSty";
import BlueTitle from "../../assets/styles/BlueTitle.js";

function HistoryPage() {
  return (
    <ScreenStyle>
      <NavBar />
      <MainStyle>
        <FeedSty>
          <div>
            <BlueTitle>Histórico</BlueTitle>
            <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
          </div>
        </FeedSty>
        <Footer />
      </MainStyle>
    </ScreenStyle>
  );
}

const FeedSty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    width: 338px;
    height: 74px;
    left: 15px;
    top: 144px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    margin-top: 12px;
  }
`;

export default HistoryPage;
