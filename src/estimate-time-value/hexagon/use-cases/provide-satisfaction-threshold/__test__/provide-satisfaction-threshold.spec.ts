import { initReduxStore, ReduxStore } from "../../../../../store/reduxStore";
import { AppState } from "../../../../../store/appState";
import {
  PROFILE_CREATED,
  PROFILE_NAME_PROVIDED,
} from "../../../../../store/actions";
import { provideSatisfactionThreshold } from "../index";

describe("Provide satisfaction threshold", () => {
  let store: ReduxStore;
  let initialState: AppState;

  beforeEach(() => {
    store = initReduxStore({});
    givenProfileName("John Doe");
    initialState = store.getState();
  });

  it("calculates effective time  satisfaction threshold", async () => {
    await store.dispatch(
      provideSatisfactionThreshold({ satisfactionThreshold: 1 }),
    );

    expect(store.getState()).toEqual<AppState>({
      ...initialState,
      profile: {
        ...initialState.profile!,
        satisfactionThreshold: 1,
      },
    });
  });

  const givenProfileName = (name: string) => {
    store.dispatch({ type: PROFILE_CREATED });
    store.dispatch({
      type: PROFILE_NAME_PROVIDED,
      payload: { name },
    });
  };
});
