import {
  AppState,
  initReduxStore,
  ReduxStore,
} from "../../../../../store/reduxStore";
import { provideProfileName } from "../index";
import { profileSlice } from "../../../reducers/profile.reducer";

describe("Ask profile name", () => {
  let store: ReduxStore;
  let initialState: AppState;

  beforeEach(async () => {
    store = initReduxStore({});
    store.dispatch(profileSlice.actions.createProfile());
    initialState = store.getState();
  });

  it("asks for a 60 minutes phone call value after providing name", async () => {
    await store.dispatch(provideProfileName({ name: "John Doe" }));

    expect(store.getState()).toEqual<AppState>({
      ...initialState,
      profile: {
        ...initialState.profile!,
        name: "John Doe",
      },
      displayedQuestion: { id: "60_MINUTES_PHONE_CALL_VALUE_TO_GET_GIFT_CARD" },
    });
  });
});
