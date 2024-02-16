import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppAsyncThunkConfig } from "../../../../store/reduxStore";
import { profileSlice } from "../../reducers/profile.reducer";

export const oneHourEasyTaskValue = createAsyncThunk<
  void,
  { value: number },
  AppAsyncThunkConfig
>("profile/one-hour-easy-task-value", async ({ value }, { dispatch }) => {
  dispatch(profileSlice.actions.setOneHourEasyTaskValue({ value }));
});
