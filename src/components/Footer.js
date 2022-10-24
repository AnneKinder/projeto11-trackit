import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar.js"


export default function NavBar() {
  const navigate = useNavigate();


  return (
    <FooterStyle>
     
      <p onClick={()=>navigate("/habitos")}> Hábitos</p>
      <div onClick={() => navigate("/hoje")}> <ProgressBar /></div>
      <p onClick={() => navigate("/historico")}> Histórico </p>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  left: 0;

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52b6ff;
    margin: 0 32px 0 32px;
  }
`;
