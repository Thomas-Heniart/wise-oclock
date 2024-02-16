import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppAsyncThunkConfig } from "../../../../store/reduxStore";
import { profileSlice } from "../../reducers/profile.reducer";

export const provideIncomeDetail = createAsyncThunk<
  void,
  {
    monthlyWorkedHours: number;
    monthlyHoursSpentInTransport: number;
    monthlyIncome: number;
  },
  AppAsyncThunkConfig
>(
  "profile/income-details",
  async (
    { monthlyWorkedHours, monthlyHoursSpentInTransport, monthlyIncome },
    { dispatch },
  ) => {
    dispatch(
      profileSlice.actions.setIncomeDetail({
        monthlyWorkedHours,
        monthlyHoursSpentInTransport,
        monthlyIncome,
      }),
    );
  },
);
