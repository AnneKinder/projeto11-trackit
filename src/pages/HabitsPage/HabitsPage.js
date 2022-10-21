import styled from "styled-components";
import NavBar from "../../components/NavBar.js";
import AddBar from "../HabitsPage/AddBar.js";
import Footer from "../../components/Footer.js";
import NewHabit from "./NewHabit.js";
import NoHabit from "./NoHabit.js";
import Habit from "./Habit.js";
import ScreenStyle from "../../assets/styles/ScreenStyle.js";
import MainStyle from "../../assets/styles/MainStyle.js";
import ImageContext from "../../context/ImageContext.js";

function HabitsPage(props) {
  const {userImage} = props
  // let [userImage, setUserImage] = useContext(ImageContext)
  function AddHabit(){
    alert("ok")
  }
  return (
    <ScreenStyle>
      {/* <ImageContext.Provider value={{userImage, setUserImage}}> */}
      <NavBar userImage={userImage}/>
      {/* </ImageContext.Provider> */}
      <MainStyle>
        <AddBar AddHabit={AddHabit} />
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
