import { useState } from "react";

import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const [newUsername, setNewUsername] = useState("");
  const isButtonDisabled = newUsername.trim() === "";
  const username = useSelector((state) => {
    return state.user.value.username;
  });
  const dispatch = useDispatch();
  return (
    <div className="loginDiv">
      <h1>Login</h1>
      <form>
        <input
          onChange={(e) => {
            setNewUsername(e.target.value);
          }}
          type="text"
          placeholder="username"
        />
        <button
          type="button"
          disabled={isButtonDisabled}
          onClick={() => {
            dispatch(
              login({
                username: newUsername,
              })
            );
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
