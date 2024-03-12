import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  auth_check_loading: true,
  user_auth: false,
  user_id: "",
  user_data: [],
  Donate: {}
};

const user_auth_slice = createSlice({
  name: "user-auth",
  initialState: initial_state,
  reducers: {
    set_user_auth: (state, actions) => {
      const { payload } = actions;
      state.user_auth = payload.auth;
      //   state.user_data = payload.data;
      state.auth_check_loading = false;
      state.user_id = payload.user;
      state.user_data = payload.user_data
    },
    set_Donater_Reciver: (state,actions) => {
      const {payload} = actions
      state.Donate = payload.Donate
    }
  },
});

export default user_auth_slice.reducer
export const { set_user_auth, set_Donater_Reciver } = user_auth_slice.actions;
