import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar.js";
import Footer from "../../components/Footer.js";
import NewHabit from "./NewHabit.js";
import NoHabit from "./NoHabit.js";
import Habit from "./Habit.js";
import ScreenStyle from "../../assets/styles/ScreenStyle.js";
import MainStyle from "../../assets/styles/MainStyle.js";

function HabitsPage(props) {
  //const { userImage } = useContext(ImageContext);
  const { userImage, token } = props;
  let [habitExists, setHabitExists] = useState(false)
  let [habitLength, setHabitLength] = useState("")


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
        setHabitsArray(res.data);
        setHabitLength(res.data.length)
        console.log(res.data);
      })
      .catch((err) => console.log(err.data));
  }, []);

  return (
    <ScreenStyle>
      <NavBar userImage={userImage} />
      <MainStyle>
        <FeedSty>
         <NewHabit token={token} setHabitExists={setHabitExists}/>
          {/* {!habitExists ? <NoHabit /> :   */}
          <Habit setHabitsArray={setHabitsArray} habitsArray={habitsArray} setHabitLength={setHabitLength} habitLength={habitLength}/>
          {/* } */}
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
