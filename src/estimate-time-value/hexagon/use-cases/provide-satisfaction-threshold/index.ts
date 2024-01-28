import { createAsyncThunk } from "@reduxjs/toolkit";
import { SATISFACTION_THRESHOLD_PROVIDED } from "../../../../store/actions";

export const provideSatisfactionThreshold = createAsyncThunk<
  void,
  { satisfactionThreshold: number }
>(
  "profile/satisfaction-threshold",
  async ({ satisfactionThreshold }, { dispatch }) => {
    dispatch({
      type: SATISFACTION_THRESHOLD_PROVIDED,
      payload: { satisfactionThreshold },
    });
  },
);
