import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppAsyncThunkConfig } from "../../../../store/reduxStore";
import { profileSlice } from "../../reducers/profile.reducer";

export const oneHourPhoneCallValue = createAsyncThunk<
  void,
  { value: number },
  AppAsyncThunkConfig
>("profile/one-hour-phone-call-value", async ({ value }, { dispatch }) => {
  dispatch(profileSlice.actions.setOneHourPhoneCallValue({ value }));
});
