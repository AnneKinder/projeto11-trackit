import React from "react";
import { AuthContext } from "../../context/auth.js";
import styled from "styled-components";
import WEEKDAYS from "../../constants/WEEKDAYS.js";
import { useState } from "react";
import AddBar from "./AddBar.js";
import axios from "axios";

export default function NewHabit(props) {
  const { setHabitAdded, habitAdded, counter } = props;
  const { user, setUser } = React.useContext(AuthContext);
  const [newTitle, setNewTitle] = useState("");
  const [newHabitDays, setnewHabitDays] = useState([]);
  const [dayColor, setDayColor] = useState("#ffffff");
  const [isOpen, setIsOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  let body = {
    name: newTitle,
    days: newHabitDays,
  };

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

  function cancelHabit() {
    setIsOpen(false);
  }

  function addHabit() {
    if (!newTitle || newHabitDays.length === 0) {
      alert("Insira hábito e dias válidos.");
    } else {
      setDisabled(true);

      axios
        .post(
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
          body,
          config
        )
        .then((res) => {
          setNewTitle("");
          setnewHabitDays("");
          setIsOpen(false);
          setHabitAdded(habitAdded + 1);
          counter += 1;
          setDisabled(false);
        })
        .catch((err) => console.log(err.data));
      setDisabled(false);
    }
  }

  return (
    <>
      <AddBar setIsOpen={setIsOpen} />
      {isOpen === false ? (
        <div></div>
      ) : (
        <NewHabitSty>
          <input
            type="text"
            name="habit"
            placeholder="nome do hábito"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            disabled={disabled}
          />
          <div className="weekday-container">
            {WEEKDAYS.map((wd, id) => (
              <WeekDay
                colorprop={newHabitDays.includes(id) ? "#e8e8e8" : "#ffffff"}
                wd={wd}
                id={id}
                key={id}
                onClick={() => addDay(wd, id)}
                disabled={disabled}
              >
                {wd}
              </WeekDay>
            ))}
          </div>
          <button
            className="cancel"
            onClick={() => cancelHabit()}
            disabled={disabled}
          >
            Cancelar
          </button>
          <button
            className="save"
            onClick={() => addHabit()}
            disabled={disabled}
          >
            Salvar
          </button>
        </NewHabitSty>
      )}
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
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.15);

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
