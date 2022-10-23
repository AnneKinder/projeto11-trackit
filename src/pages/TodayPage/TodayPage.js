import styled from "styled-components";
import NavBar from "../../components/NavBar.js";
import Footer from "../../components/Footer.js";
import ScreenStyle from "../../assets/styles/ScreenStyle.js";
import MainStyle from "../../assets/styles/MainStyle.js";
import TodayBar from "./TodayBar.js";
import TodayCard from "./TodayCard.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function TodayPage(props) {
  
  const { userImage, token } = props;
  let [todayList, setTodayList] = useState([])

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(()=>{

   axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
   .then((res)=>{
   setTodayList(res.data)
  })
   .catch((err)=>console.log(err.data))

  },[])

  return (
    <ScreenStyle>
      <NavBar userImage={userImage} />
      <MainStyle>
        <FeedSty>
          <TodayBar />
           {todayList.map((t, id)=><TodayCard key={id} name={t.name} sequence={t.currentSequence} record={t.highestSequence} id={t.id} token={token}/>)} 
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
