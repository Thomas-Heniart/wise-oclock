import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileSlice } from "../../reducers/profile.reducer";

export const provideSatisfactionThreshold = createAsyncThunk<
  void,
  { satisfactionThreshold: number }
>(
  "profile/satisfaction-threshold",
  async ({ satisfactionThreshold }, { dispatch }) => {
    dispatch(
      profileSlice.actions.setSatisfactionThreshold({ satisfactionThreshold }),
    );
  },
);
