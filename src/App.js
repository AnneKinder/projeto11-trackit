import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/StartPage/LoginPage";
import SignUpPage from "./pages/StartPage/SignUpPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import { useState, useContext } from "react";
import { AuthProvider } from "./context/auth";


function App() {
  let [token, setToken] = useState("");

  return (
    <>
  <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LoginPage setToken={setToken} />} />
          <Route path="/cadastro" element={<SignUpPage />}/>
          <Route path="/habitos" element={<HabitsPage  token={token} />}/>
          <Route path="/hoje" element={<TodayPage token={token} />}/>
          <Route path="/historico" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
