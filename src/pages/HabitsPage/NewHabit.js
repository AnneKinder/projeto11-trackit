import styled from "styled-components";
import WEEKDAYS from "../../constants/WEEKDAYS.js"
import { useState } from "react";

export default function NewHabit() {
  let [newTitle, setNewTitle] = useState("")
  return (
    <NewHabitSty>
      <input 
      type="text" 
      name="habit" 
      placeholder="nome do hábito" />
      <div className="weekday-container">
        {WEEKDAYS.map((wd, id) => (
          <div className="weekday" key={id}>{wd}</div>
        ))}
      </div>
      <button className="cancel">Cancelar</button>
      <button className="save">Salvar</button>
    </NewHabitSty>
  );
}

const NewHabitSty = styled.div`
  width: 340px;
  height: 180px;
  background-color: white;
  left: 17px;
  top: 147px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  input {
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    left: 36px;
    top: 165px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin: 10px 19px 16px 18px;
    padding-left: 10px;
  }

  .weekday-container {
    width: 300px;
    height: 36px;
    display: flex;
    align-items: center;
    margin-left: 19px;
  }

  .weekday {
    width: 30px;
    height: 30px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #dbdbdb;
    text-align: center;
    margin: 2px;
  }

  .cancel {
    width: 84px;
    height: 35px;
    left: 257px;
    top: 277px;
    background-color: white;
    color: #52b6ff;
    border-radius: 4.63636px;
    border: white 1px solid;
    margin-left: 150px;
  }

  .save {
    width: 84px;
    height: 35px;
    left: 257px;
    top: 277px;
    color: white;
    background: #52b6ff;
    border-radius: 4.63636px;
    border: #52b6ff 1px solid;
    margin-top:24px;
    margin-left: 10px;
  }
`;
