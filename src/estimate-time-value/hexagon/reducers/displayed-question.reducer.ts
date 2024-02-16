import { DisplayedQuestion } from "../models/displayed-question";
import { createSlice } from "@reduxjs/toolkit";

import { profileSlice } from "./profile.reducer";

type State = DisplayedQuestion | null;

export const displayedQuestionSlice = createSlice({
  name: "displayedQuestion",
  initialState: () => null as State,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(profileSlice.actions.createProfile.type, () => ({
        id: "ASK_NAME",
      }))
      .addCase(profileSlice.actions.setName.type, () => ({
        id: "60_MINUTES_PHONE_CALL_VALUE_TO_GET_GIFT_CARD",
      }))
      .addCase(profileSlice.actions.setOneHourPhoneCallValue.type, () => ({
        id: "60_MINUTES_EASY_TASK_VALUE",
      }))
      .addCase(profileSlice.actions.setOneHourEasyTaskValue.type, () => ({
        id: "INCOME",
      }))
      .addCase(profileSlice.actions.setIncomeDetail.type, () => ({
        id: "SATISFACTION_THRESHOLD",
      }));
  },
});
