import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    username: "",
    check: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = {
        ...action.payload,
        check: true,
      };
    },
    logout: (state) => {
      state.value = initialState;
    },
  },
});

const goalSlice = createSlice({
  name: "goal",
  initialState: 0,
  reducers: {
    setGoal: (state, action) => {
      return (state = action.payload);
    },
  },
});
export const { login, logout } = userSlice.actions;
export const { setGoal } = goalSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    goal: goalSlice.reducer,
  },
});
