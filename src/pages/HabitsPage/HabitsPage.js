import styled from "styled-components";
import { useState, useContext } from "react";
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

  return (
    <ScreenStyle>
      <NavBar userImage={userImage} />
      <MainStyle>
        <FeedSty>
         <NewHabit token={token} setHabitExists={setHabitExists}/>
          {!habitExists ? <NoHabit /> :  <Habit token={token} />}
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
