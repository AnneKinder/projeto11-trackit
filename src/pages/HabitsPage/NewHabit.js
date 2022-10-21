import styled from "styled-components";
import WEEKDAYS from "../../constants/WEEKDAYS.js";
import { useState } from "react";
import AddBar from "./AddBar.js";
import axios from "axios";

export default function NewHabit(props) {
  const {token, setHabitExists} = props
  let [newTitle, setNewTitle] = useState("");
  let [newHabitDays, setnewHabitDays] = useState([]);
  let [dayColor, setDayColor] = useState("#ffffff");
  let [isOpen, setIsOpen] = useState(false)
  
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }
  
  let body = {
    name:newTitle,
    days:newHabitDays
    }



  function addDay(wd, id) {
    if (!newHabitDays.includes(id)) {
      let newAdd = [...newHabitDays, id];
      setnewHabitDays(newAdd);
      setDayColor("red");
    } else {
      const newAdd = newHabitDays.filter((letter) => id !== letter);
      setnewHabitDays(newAdd);
      setDayColor("#ffffff");
    }

  }



function cancelHabit(){  
  console.log("cancelado")
  setIsOpen(false)
}

function addHabit(){


if(newTitle===null || newHabitDays=== null){
  alert("Insira hábito e dias válidos.")
  
}else{


axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
            body, config)
            .then(res =>{
              console.log("foi pra api")
              setNewTitle("")
              setnewHabitDays("")
              setIsOpen(false)
              setHabitExists(true)
            })
            .catch((err)=>console.log(err.data))
  
}}





  return (
    <>
      <AddBar setIsOpen={setIsOpen} />
      {isOpen===false ? <div></div> : 
      <NewHabitSty>
        {/* {dayColor === "red" ? <h1> vermelho </h1> : <h1> é azul </h1>} */}

        <input
          type="text"
          name="habit"
          placeholder="nome do hábito"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <div className="weekday-container">
          {WEEKDAYS.map((wd, id) => (
            <WeekDay
              colorprop={newHabitDays.includes(id) ? "#e8e8e8" : "#ffffff"}
              id={id}
              wd={wd}
              key={id}
              onClick={() => addDay(wd, id)}
            >
              {wd}
            </WeekDay>
          ))}
        </div>
        <button className="cancel" onClick={()=>cancelHabit()}>Cancelar</button>
        <button className="save" onClick={()=> addHabit()}>Salvar</button>
      </NewHabitSty>
      }
    </>
  );
}

const NewHabitSty = styled.div`
  width: 340px;
  height: 180px;
  background-color: white;
  left: 17px;
  top: 147px;
  border-radius: 5px;
  box-shadow: 0px 1px 4px 1px rgba(0,0,0,0.15);

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
    margin-top: 24px;
    margin-left: 10px;
  }
`;

const WeekDay = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.colorprop};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #dbdbdb;
  text-align: center;
  margin: 2px;
`;
