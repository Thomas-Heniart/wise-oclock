import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppAsyncThunkConfig } from "../../../../store/reduxStore";
import { PROFILE_NAME_PROVIDED } from "../../../../store/actions";

export const provideProfileName = createAsyncThunk<
  void,
  { name: string },
  AppAsyncThunkConfig
>("profile/name", async ({ name }, { dispatch }) => {
  dispatch({ type: PROFILE_NAME_PROVIDED, payload: { name } });
});
