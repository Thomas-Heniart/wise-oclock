import {
  AppState,
  initReduxStore,
  ReduxStore,
} from "../../../../../store/reduxStore";
import { provideSatisfactionThreshold } from "../index";
import { profileSlice } from "../../../reducers/profile.reducer";

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
    store.dispatch(profileSlice.actions.createProfile());
    store.dispatch(profileSlice.actions.setName({ name }));
  };
});
