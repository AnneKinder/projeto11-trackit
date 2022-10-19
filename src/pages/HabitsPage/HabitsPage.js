import styled from "styled-components";
import NavBar from "../../components/NavBar.js";
import AddBar from "../../components/AddBar.js";
import Footer from "../../components/Footer.js";
import NewHabit from "../../components/NewHabit.js";
import NoHabit from "./NoHabit.js";
import Habit from "../../components/Habit.js";
import ScreenStyle from "../../assets/styles/ScreenStyle.js";
import MainStyle from "../../assets/styles/MainStyle.js";

function HabitsPage() {
  return (
    <ScreenStyle>
      <NavBar />
      <MainStyle>
        <AddBar />
        <FeedSty>
          <NewHabit />
          <NoHabit />
          <Habit />
        </FeedSty>
        <Footer />
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
