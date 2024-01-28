import { initReduxStore, ReduxStore } from "../../../../../store/reduxStore";
import { AppState } from "../../../../../store/appState";
import { PROFILE_CREATED } from "../../../../../store/actions";
import { provideProfileName } from "../index";

describe("Ask profile name", () => {
  let store: ReduxStore;
  let initialState: AppState;

  beforeEach(() => {
    store = initReduxStore({});
    store.dispatch({ type: PROFILE_CREATED });
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
