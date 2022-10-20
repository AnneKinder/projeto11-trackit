import styled from "styled-components";

export default function NavBar() {
  return (
    <AddBarSty>
      <h1> Meus hábitos </h1>
      <button> + </button>
    </AddBarSty>
  );
}

const AddBarSty = styled.div`
  box-sizing: border-box;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
    margin-right: 150px;
  }

  button {
    font-family: "Lexend Deca";
    width: 40px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 317px;
    top: 92px;
    background: #52b6ff;
    border-radius: 4.63636px;
    border: #52b6ff 1px solid;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    color: #ffffff;
  }
`;
