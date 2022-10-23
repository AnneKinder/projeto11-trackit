import styled from "styled-components";
import TextSty from "../../assets/styles/TextSty.js";
import { IonIcon } from "@ionic/react";
import WEEKDAYS from "../../constants/WEEKDAYS.js";
import axios from "axios";

export default function Habit(props) {
  const { habitsArray, setHabitsArray, token, setUpdateDeleted} = props;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };


  function deletePost(habit, habitId) {
    //alert(habit.name) //titulo do habito
    //alert(habit.id) //numero esquisitao
   // alert (habitId) //id do habito na habitsArray

   if (window.confirm("Você tem certeza que deseja excluir o hábito?")) {

   axios.delete(
     `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`, config
    );

  setHabitsArray(habitsArray.filter((item) => item.id !== habit.id));
  setUpdateDeleted(true)

} else{
  console.log("Not Deleted")
}
  }

  return (
    <>
      {habitsArray.map((habit, habitId) => (
        <HabitSty habit={habit} habitId={habitId} key={habitId}>
          <div className="habit-top">
            <TextSty> {habit.name} </TextSty>
            <div onClick={() => deletePost(habit, habitId)} className="trashcan">
              <IonIcon icon="trash-outline" />
            </div>
          </div>

          <div className="weekday-container">
            {WEEKDAYS.map((wd, id) => (
              <WeekDay
                colorprop={habit.days.includes(id) ? "#e8e8e8" : "#ffffff"}
                wd={wd}
                id={id}
                key={id}
              >
                {wd}
              </WeekDay>
            ))}
          </div>
        </HabitSty>
      ))}
    </>
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