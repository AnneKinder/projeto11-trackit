import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/StartPage/LoginPage";
import SignUpPage from "./pages/StartPage/SignUpPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import { useState, useContext } from "react";


function App() {
  let [userImage, setUserImage] = useState("");
  let [token, setToken] = useState("");

  return (
    <>
  
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LoginPage setUserImage={setUserImage}  setToken={setToken} />} />
          <Route path="/cadastro" element={<SignUpPage />}/>
          <Route path="/habitos" element={<HabitsPage userImage={userImage} token={token} />}/>
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
