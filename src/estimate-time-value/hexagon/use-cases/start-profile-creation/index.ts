import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppAsyncThunkConfig } from "../../../../store/reduxStore";
import { profileSlice } from "../../reducers/profile.reducer";

export const startProfileCreation = createAsyncThunk<
  void,
  void,
  AppAsyncThunkConfig
>("profile/new", async (_, { dispatch }) => {
  dispatch(profileSlice.actions.createProfile());
});
