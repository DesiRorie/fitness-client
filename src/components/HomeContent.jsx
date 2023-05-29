import React from "react";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import { useSelector } from "react-redux";
import SetGoals from "../pages/SetGoals";
useSelector;

const HomeContent = () => {
  const goal = useSelector((state) => state.goal);
  const username = useSelector((state) => {
    return state.user.value.username;
  });
  return (
    <div className="homeContent">
      <div className="todayAndEdit">
        <h2>{username}'s goal for today</h2>
        <button>Edit</button>
      </div>
      <div className="calorieDiv">
        <h3>Calories</h3>
        <p style={{ color: "#888" }}>Remaining = Goal - Food + Exercise</p>
        <div className="calorieSplit">
          <div>
            <span>{goal} </span>
            <span>remaining</span>
          </div>
          <div>
            <ul>
              <li>
                Base Goal <span>{goal}</span>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="stepsAndExercise">
        <div className="stepsChild space">
          <h4>Steps</h4>
          <div className="stepsDiv">
            <DirectionsRunIcon />
            <p>Conect to track your steps</p>
          </div>
        </div>
        <div className="exerciseChild space">
          <div className="exerciseDiv">
            <h4>Exercise</h4>
            <span>+</span>
          </div>
          <span> insert calories burned from exercise</span>
          <span> insert time exercise</span>
        </div>
      </div>
      <div className="weightChart">
        <div className="weightChild">
          <h4>Weight </h4>
          <span>+</span>
        </div>

        <span>Last 90 days</span>
      </div>
    </div>
  );
};

export default HomeContent;
