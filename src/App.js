import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/StartPage/LoginPage";
import SignUpPage from "./pages/StartPage/SignUpPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import ImageContext from "../src/context/ImageContext";
import { useState, useContext } from "react";

function App() {
  let [userImage, setUserImage] = useState("");
  console.log(userImage);
  let [teste, setTeste] = useState("");

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        {/* <ImageContext.Provider value={userImage}>  */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/cadastro"
            element={<SignUpPage setUserImage={setUserImage} />}
          />
          <Route
            path="/habitos"
            element={<HabitsPage userImage={userImage} />}
          />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoryPage />} />
        </Routes>
        {/* </ImageContext.Provider>  */}
      </BrowserRouter>
    </>
  );
}

export default App;
