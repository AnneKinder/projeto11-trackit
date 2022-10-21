import styled from "styled-components";
import TextSty from "../../assets/styles/TextSty.js";
import { IonIcon } from "@ionic/react";
import WEEKDAYS from "../../constants/WEEKDAYS.js";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Habit(props) {
  const { token } = props;

  let [habitsArray, setHabitsArray] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        config
      )
      .then((res) => {
        console.log(res.data);
        setHabitsArray(res.data);
      })
      .catch((err) => console.logo(err.data));
  }, []);
  

  return (
    <HabitSty>
      <div className="habit-top">
        <TextSty> Título do hábito</TextSty>
        <div className="trashcan">
          <IonIcon icon="trash-outline" />
        </div>
      </div>

      <div className="weekday-container">
        {WEEKDAYS.map((wd, id) => (
          <div className="weekday" key={id}>
            {wd}
          </div>
        ))}
      </div>
    </HabitSty>
  );
}

const HabitSty = styled.div`
  width: 340px;
  height: 91px;
  left: 17px;
  top: 147px;
  background: #ffffff;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 15px;
  margin-top: 30px;
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.15);

  .weekday-container {
    width: 300px;
    height: 36px;
    display: flex;
    align-items: center;
    margin-left: px;
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
    margin: 10px 5px 0 0;
  }

  .habit-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
