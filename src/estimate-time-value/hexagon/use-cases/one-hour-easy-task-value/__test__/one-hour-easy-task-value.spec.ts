import {
  AppState,
  initReduxStore,
  ReduxStore,
} from "../../../../../store/reduxStore";
import { oneHourEasyTaskValue } from "../index";
import { profileSlice } from "../../../reducers/profile.reducer";

describe("Ask 60 minutes easy task value", () => {
  let store: ReduxStore;
  let initialState: AppState;

  beforeEach(() => {
    store = initReduxStore({});
    store.dispatch(profileSlice.actions.createProfile());
    store.dispatch(profileSlice.actions.setName({ name: "John Doe" }));
    initialState = store.getState();
  });

  it("asks for income after providing 60 minutes easy task value", async () => {
    await store.dispatch(oneHourEasyTaskValue({ value: 12 }));

    expect(store.getState()).toEqual<AppState>({
      ...initialState,
      profile: {
        ...initialState.profile!,
        "60minutesEasyTaskValue": 12,
      },
      displayedQuestion: { id: "INCOME" },
    });
  });
});
