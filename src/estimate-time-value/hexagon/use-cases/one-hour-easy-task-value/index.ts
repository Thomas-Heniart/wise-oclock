import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppAsyncThunkConfig } from "../../../../store/reduxStore";
import { ONE_HOUR_EASY_TASK_VALUE_PROVIDED } from "../../../../store/actions";

export const oneHourEasyTaskValue = createAsyncThunk<
  void,
  { value: number },
  AppAsyncThunkConfig
>("profile/one-hour-easy-task-value", async ({ value }, { dispatch }) => {
  dispatch({ type: ONE_HOUR_EASY_TASK_VALUE_PROVIDED, payload: { value } });
});
