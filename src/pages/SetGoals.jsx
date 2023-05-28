import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGoal } from "../store";

const SetGoals = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => {
    return state.user.value.username;
  });
  const [newGoal, setNewGoal] = useState(0);
  const handleSetGoal = () => {
    dispatch(setGoal(newGoal));
  };
  const goal = useSelector((state) => state.goal);

  return (
    <div>
      <div className="greetingDiv">
        <h2>Hello {username}, set your daily goals.</h2>
        <label htmlFor="">Calorie Intake</label>
        <input
          onChange={(e) => setNewGoal(e.target.value)}
          type="number"
          placeholder="amount"
        />
        <button onClick={handleSetGoal}>set goal</button>
      </div>
      {goal}
    </div>
  );
};

export default SetGoals;
