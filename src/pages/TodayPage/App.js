import GlobalStyle from "./assets/styles/GlobalStyle";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/StartPage/LoginPage";
import SignUpPage from "./pages/StartPage/SignUpPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import NavBar from "../src/components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />

        <Routes>
           <Route path="/" element={<LoginPage />} />
         {/* <Route path="/cadastro" element={<SignUpPage />} /> 
          <Route path="/habitos" element={<HabitsPage />} /> 
           <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoryPage />} />  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
