import GlobalStyle from "./assets/styles/GlobalStyle"
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <GlobalStyle />
      <LoginPage />
      <SignUpPage />
      <HabitsPage />
      <TodayPage />
      <HistoryPage />
      </BrowserRouter>
    </>
  );
}

export default App;
