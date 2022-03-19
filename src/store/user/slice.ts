import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SetUserDataPayload } from "./payload";

interface UserState {
  isFetched: boolean;
  email: string;
  id: string;
  role: string;
  username: string;
}

const initialState: UserState = {
  isFetched: false,
  email: "",
  id: "",
  role: "",
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<SetUserDataPayload>) => {
      const { email, id, role, username } = action.payload;
      state.isFetched = true;
      state.email = email;
      state.id = id;
      state.role = role;
      state.username = username;
    },
    resetUserData: (state) => {
      state.isFetched = initialState.isFetched;
      state.email = initialState.email;
      state.id = initialState.id;
      state.role = initialState.role;
      state.username = initialState.username;
    },
  },
});

export const { setUserData, resetUserData } = userSlice.actions;

export default userSlice.reducer;
