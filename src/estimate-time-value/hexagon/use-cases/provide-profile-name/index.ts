import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppAsyncThunkConfig } from "../../../../store/reduxStore";
import { profileSlice } from "../../reducers/profile.reducer";

export const provideProfileName = createAsyncThunk<
  void,
  { name: string },
  AppAsyncThunkConfig
>("profile/name", async ({ name }, { dispatch }) => {
  dispatch(profileSlice.actions.setName({ name }));
});
