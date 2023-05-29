import { Routes, Route } from "react-router-dom";
import "./App.css";
import BottomNav from "./components/BottomNav";
import Homepage from "./pages/Homepage";
import { Provider } from "react-redux";
import { store } from "./store";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import SetGoals from "./pages/SetGoals";
import Diary from "./pages/Diary";

function App() {
  const check = useSelector((state) => state.user.value.check);
  const goal = useSelector((state) => state.goal);

  return (
    <>
      {!check ? (
        <LoginPage />
      ) : (
        <>
          <BottomNav />
          <Routes>
            {!goal ? (
              <Route path="/" element={<SetGoals />} />
            ) : (
              <>
                <Route path="/" element={<Homepage />} />
              </>
            )}
            <Route path="diary" element={<Diary />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
