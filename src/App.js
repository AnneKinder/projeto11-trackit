import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/StartPage/LoginPage";
import SignUpPage from "./pages/StartPage/SignUpPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import MyContext from "../src/context/MyContext.js"

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <MyContext.Provider value="teste">
        <Routes>
          
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoryPage />} />
        
        </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
