import styled from "styled-components";

const StartStyle = styled.div`
  background-color: white;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lexend Deca", sans-serif;
  margin: 75px 0 199px 0;

  img {
    width: 280px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  
  input {
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    left: 36px;
    top: 279px;
    background: ${props=> props.inputcolor};
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #dbdbdb;
    padding: 10px;
    margin-bottom: 8px;
  }

  button {
    width: 303px;
    height: 45px;
    left: 36px;
    top: 381px;
    background: ${props=>props.buttoncolor};
    /* #52b6ff; */
    border-radius: 4.63636px;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    border: #52b6ff solid 1px;
    color: #ffffff;
  }

  p {
    margin-top: 24px;
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
  }
`;

export default StartStyle;
