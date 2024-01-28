import { initReduxStore, ReduxStore } from "../../../../../store/reduxStore";
import { AppState } from "../../../../../store/appState";
import { PROFILE_NAME_PROVIDED } from "../../../../../store/actions";
import { provideSatisfactionThreshold } from "../index";

describe("Provide satisfaction threshold", () => {
  let store: ReduxStore;
  let initialState: AppState;

  beforeEach(() => {
    store = initReduxStore({});
    //TODO for calculation -> dispatch all previous actions
    store.dispatch({
      type: PROFILE_NAME_PROVIDED,
      payload: { name: "John Doe" },
    });
    initialState = store.getState();
  });

  it("saves satisfaction threshold", async () => {
    await store.dispatch(
      provideSatisfactionThreshold({ satisfactionThreshold: 30 }),
    );

    expect(store.getState()).toEqual<AppState>({
      ...initialState,
      profile: {
        ...initialState.profile!,
        satisfactionThreshold: 30,
      },
    });
  });
});
