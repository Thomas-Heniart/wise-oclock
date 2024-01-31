import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppAsyncThunkConfig } from "../../../../store/reduxStore";
import { AppState } from "../../../../store/appState";
import { TIME_VALUE_ESTIMATED } from "../../../../store/actions";
import { estimateProfile } from "../../models/profile";

export const calculateEstimatedTimeValue = createAsyncThunk<
  void,
  void,
  AppAsyncThunkConfig
>("profile/estimate-time-value", async (_, { dispatch, getState }) => {
  const state = getState() as AppState;
  const profile = state.profile!;
  dispatch({
    type: TIME_VALUE_ESTIMATED,
    payload: { estimatedTimeValue: estimateProfile(profile) },
  });
});
