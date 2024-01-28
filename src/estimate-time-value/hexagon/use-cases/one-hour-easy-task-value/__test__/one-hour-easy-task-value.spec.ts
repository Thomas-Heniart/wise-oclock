import { initReduxStore, ReduxStore } from "../../../../../store/reduxStore";
import { AppState } from "../../../../../store/appState";
import { PROFILE_NAME_PROVIDED } from "../../../../../store/actions";
import { oneHourEasyTaskValue } from "../index";

describe("Ask 60 minutes easy task value", () => {
  let store: ReduxStore;
  let initialState: AppState;

  beforeEach(() => {
    store = initReduxStore({});
    store.dispatch({
      type: PROFILE_NAME_PROVIDED,
      payload: { name: "John Doe" },
    });
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
