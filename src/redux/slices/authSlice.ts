import { createSlice } from "@reduxjs/toolkit";

export type TUserState = {
  _id: string;
  username: string;
  role: string;
  token: string;
};

const initialState: TUserState = {
  _id: "",
  username: "",
  role: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state._id = action.payload._id;
      state.username = action.payload.username;
      state.role = action.payload.role;
      state.token = action.payload.token;
    },
    logOut: (state) => {
      state._id = "";
      state.username = "";
      state.role = "";
      state.token = "";
    },
  },
});
export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
