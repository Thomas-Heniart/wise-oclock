import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppAsyncThunkConfig, AppState } from "../../../../store/reduxStore";
import { estimateProfile } from "../../models/profile";
import { profileSlice } from "../../reducers/profile.reducer";

export const calculateEstimatedTimeValue = createAsyncThunk<
  void,
  void,
  AppAsyncThunkConfig
>("profile/estimate-time-value", async (_, { dispatch, getState }) => {
  const state = getState() as AppState;
  const profile = state.profile!;
  dispatch(
    profileSlice.actions.setEstimatedTimeValue({
      estimatedTimeValue: estimateProfile(profile),
    }),
  );
});
