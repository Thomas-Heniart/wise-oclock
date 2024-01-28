import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppAsyncThunkConfig } from "../../../../store/reduxStore";
import { INCOME_DETAILS_PROVIDED } from "../../../../store/actions";

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
    dispatch({
      type: INCOME_DETAILS_PROVIDED,
      payload: {
        monthlyWorkedHours,
        monthlyHoursSpentInTransport,
        monthlyIncome,
      },
    });
  },
);
