import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppAsyncThunkConfig } from "../../../../store/reduxStore";
import { ONE_HOUR_PHONE_CALL_VALUE_PROVIDED } from "../../../../store/actions";

export const oneHourPhoneCallValue = createAsyncThunk<
  void,
  { value: number },
  AppAsyncThunkConfig
>("profile/one-hour-phone-call-value", async ({ value }, { dispatch }) => {
  dispatch({ type: ONE_HOUR_PHONE_CALL_VALUE_PROVIDED, payload: { value } });
});
