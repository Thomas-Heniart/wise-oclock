import { Action, configureStore, Store, ThunkDispatch } from "@reduxjs/toolkit";
import { AppState } from "./appState";
import { GetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { BaseThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { profileReducer } from "../estimate-time-value/hexagon/reducers/profile.reducer";
import { displayedQuestionReducer } from "../estimate-time-value/hexagon/reducers/displayed-question.reducer";

export interface Dependencies {}

export const initReduxStore = (dependencies: Partial<Dependencies>) => {
  return configureStore({
    reducer: {
      profile: profileReducer,
      displayedQuestion: displayedQuestionReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware: GetDefaultMiddleware<AppState>) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: dependencies,
        },
      }),
  });
};

export type ReduxStore = Store<AppState> & {
  dispatch: ThunkDispatch<AppState, Dependencies, Action>;
};

export type AppAsyncThunkConfig = BaseThunkAPI<AppState, Dependencies>;

export type AppDispatch = ThunkDispatch<AppState, Dependencies, Action>;
