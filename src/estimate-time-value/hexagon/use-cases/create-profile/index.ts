import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppAsyncThunkConfig } from "../../../../store/reduxStore";

import { PROFILE_CREATED } from "../../../../store/actions";

export const createProfile = createAsyncThunk<
  void,
  { name: string },
  AppAsyncThunkConfig
>("profile/new", async ({ name }, { dispatch }) => {
  dispatch({ type: PROFILE_CREATED, payload: { name } });
});
