import { Routes, Route } from "react-router-dom";
import "./App.css";
import BottomNav from "./components/BottomNav";
import Homepage from "./pages/Homepage";
import { Provider } from "react-redux";
import { store } from "./store";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";

function App() {
  const check = useSelector((state) => state.user.value.check);

  return (
    <>
      {!check ? (
        <LoginPage />
      ) : (
        <>
          <BottomNav />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
