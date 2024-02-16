import { Profile } from "../models/profile";
import { createSlice } from "@reduxjs/toolkit";

import { TypedActionCreator } from "@reduxjs/toolkit/src/mapBuilders";

type State = Profile | null;

export const profileSlice = createSlice({
  name: "profile",
  initialState: () => null as State,
  reducers: {
    createProfile: () => ({
      name: null,
      "60minutesPhoneCallValue": null,
      "60minutesEasyTaskValue": null,
      monthlyWorkedHours: null,
      monthlyHoursSpentInTransport: null,
      monthlyIncome: null,
      satisfactionThreshold: null,
      estimatedTimeValue: null,
    }),
    setName: (state, { payload: { name } }: { payload: { name: string } }) => ({
      ...state!,
      name,
    }),
    setOneHourPhoneCallValue: (state, { payload: { value } }) => ({
      ...state!,
      "60minutesPhoneCallValue": value,
    }),
    setOneHourEasyTaskValue: (state, { payload: { value } }) => ({
      ...state!,
      "60minutesEasyTaskValue": value,
    }),
    setIncomeDetail: (
      state,
      {
        payload: {
          monthlyWorkedHours,
          monthlyHoursSpentInTransport,
          monthlyIncome,
        },
      },
    ) => ({
      ...state!,
      monthlyWorkedHours,
      monthlyHoursSpentInTransport,
      monthlyIncome,
    }),
    setSatisfactionThreshold: (
      state,
      { payload: { satisfactionThreshold } },
    ) => ({
      ...state!,
      satisfactionThreshold,
    }),
    setEstimatedTimeValue: (state, { payload: { estimatedTimeValue } }) => ({
      ...state!,
      estimatedTimeValue,
    }),
  },
});

export interface ProvideNameAction extends TypedActionCreator<string> {
  payload: {
    name: string;
  };
}
