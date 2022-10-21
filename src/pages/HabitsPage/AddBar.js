import styled from "styled-components";
import BlueTitle from "../../assets/styles/BlueTitle.js";

export default function AddBar(props) {
  const {setIsOpen} = props

  function AddHabit() {
    setIsOpen(true)
  }

  return (
    <AddBarSty>
      <BlueTitle> Meus hábitos </BlueTitle>
      <button onClick={AddHabit}> + </button>
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

  button {
    font-family: "Lexend Deca";
    width: 40px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #52b6ff;
    border-radius: 4.63636px;
    border: #52b6ff 1px solid;
    font-weight: 400;
    font-size: 26.976px;
    color: #ffffff;
    margin-left: 130px;
    box-shadow: 0px 1px 4px 1px rgba(0,0,0,0.15);
  }
`;
