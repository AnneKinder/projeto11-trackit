import styled from "styled-components";

export default function NavBar() {
  return (
    <FooterStyle>
      <p> Hábitos</p>
      <p> Hoje</p>
      <p> Histórico</p>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgreen;
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
