import styled from "styled-components";
import NavBar from "../../components/NavBar.js";
import Footer from "../../components/Footer.js";
import ScreenStyle from "../../assets/styles/ScreenStyle.js";
import MainStyle from "../../assets/styles/MainStyle.js";
import TodayBar from "./TodayBar.js";
import TodayCard from "./TodayCard.js";
import { useEffect, useState } from "react";
import axios from "axios";

function TodayPage(props) {
  
  const { userImage, token } = props;
  let [todayList, setTodayList] = useState([])
  let [checkHabits, setCheckHabits] = useState([]);
  let [habitosFeitos, setHabitosFeitos] = useState([])
  let [result, setResult] = useState(0)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(()=>{

   axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
   .then((res)=>{
   setTodayList(res.data)
  setHabitosFeitos(res.data.filter((x)=>x.done===true))
    // calculate()
   
  })
   .catch((err)=>console.log(err.data))

  },[checkHabits])

// function calculate(){
//  setResult(((checkHabits.length*100)/todayList.length))

// }


useEffect(()=>{
setResult((habitosFeitos.length*100)/todayList.length)


})


  return (
    <ScreenStyle>
      <NavBar userImage={userImage} />
      <MainStyle>
        <FeedSty>
          <TodayBar />
          <div>{result}</div>
           {todayList.map((t, i)=><TodayCard key={i} name={t.name} sequence={t.currentSequence} record={t.highestSequence} id={t.id} isDone={t.done} checkHabits={checkHabits} setCheckHabits={setCheckHabits} token={token}/>)} 
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

export default TodayPage;
