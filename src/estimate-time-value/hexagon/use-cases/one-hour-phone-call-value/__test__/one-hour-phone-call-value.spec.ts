import {
  AppState,
  initReduxStore,
  ReduxStore,
} from "../../../../../store/reduxStore";
import { oneHourPhoneCallValue } from "../index";
import { profileSlice } from "../../../reducers/profile.reducer";

describe("Ask 60 minutes phone call value", () => {
  let store: ReduxStore;
  let initialState: AppState;

  beforeEach(() => {
    store = initReduxStore({});
    store.dispatch(profileSlice.actions.createProfile());
    store.dispatch(profileSlice.actions.setName({ name: "John Doe" }));
    initialState = store.getState();
  });

  it("asks for a 60 minutes easy task value after providing 60 minutes phone call value", async () => {
    await store.dispatch(oneHourPhoneCallValue({ value: 12 }));

    expect(store.getState()).toEqual<AppState>({
      ...initialState,
      profile: {
        ...initialState.profile!,
        "60minutesPhoneCallValue": 12,
      },
      displayedQuestion: { id: "60_MINUTES_EASY_TASK_VALUE" },
    });
  });
});
