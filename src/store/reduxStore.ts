import {
  Action,
  combineReducers,
  configureStore,
  Store,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { GetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { BaseThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { profileSlice } from "../estimate-time-value/hexagon/reducers/profile.reducer";
import { displayedQuestionSlice } from "../estimate-time-value/hexagon/reducers/displayed-question.reducer";

export interface Dependencies {}

const rootReducer = combineReducers({
  profile: profileSlice.reducer,
  displayedQuestion: displayedQuestionSlice.reducer,
});
export const initReduxStore = (dependencies: Partial<Dependencies>) => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware: GetDefaultMiddleware<AppState>) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: dependencies,
        },
      }),
  });
};

export type AppState = ReturnType<typeof rootReducer>;

export type ReduxStore = Store<AppState> & {
  dispatch: ThunkDispatch<AppState, Dependencies, Action>;
};

export type AppAsyncThunkConfig = BaseThunkAPI<AppState, Dependencies>;

export type AppDispatch = ThunkDispatch<AppState, Dependencies, Action>;
