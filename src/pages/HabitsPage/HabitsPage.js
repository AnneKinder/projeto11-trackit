
import React from "react";
import styled from "styled-components";
import { useState, useEffect} from "react";
import axios from "axios";
import NavBar from "../../components/NavBar.js";
import Footer from "../../components/Footer.js";
import NewHabit from "./NewHabit.js";
import NoHabit from "./NoHabit.js";
import Habit from "./Habit.js";
import ScreenStyle from "../../assets/styles/ScreenStyle.js";
import MainStyle from "../../assets/styles/MainStyle.js";
import { AuthContext } from "../../context/auth.js";



function HabitsPage() {
  const {user, setUser} = React.useContext(AuthContext)

  let [habitAdded, setHabitAdded] = useState(0)
  let [habitLength, setHabitLength] = useState("")
  let [habitsArray, setHabitsArray] = useState([]);
  let [updateDeleted, setUpdateDeleted] = useState(false)
  let counter=0

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  useEffect(() => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        config
      )
      .then((res) => {
        setHabitsArray(res.data);
        setHabitLength(res.data.length)
      })
      .catch((err) => console.log(err.data));
  }, [habitAdded, updateDeleted]);

  return (
    <ScreenStyle>
      <NavBar userImage={user.image} />
      <MainStyle>
        <FeedSty>
         <NewHabit habitAdded={habitAdded} setHabitAdded={setHabitAdded} counter={counter}/>
    
          <Habit habitsArray={habitsArray} setHabitsArray={setHabitsArray} setUpdateDeleted={setUpdateDeleted}/>
          {counter!==0 ? <NoHabit /> : ""  }
          
        </FeedSty>
        <Footer  />
      </MainStyle>
    </ScreenStyle>
  );
}

const FeedSty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default HabitsPage;