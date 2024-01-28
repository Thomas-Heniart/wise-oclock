import { initReduxStore, ReduxStore } from "../../../../../store/reduxStore";
import { AppState } from "../../../../../store/appState";
import { startProfileCreation } from "../index";

describe("Create a new profile", () => {
  let store: ReduxStore;
  let initialState: AppState;

  beforeEach(() => {
    store = initReduxStore({});
    initialState = store.getState();
  });

  it("has no profile initially", () => {
    expect(store.getState()).toEqual<AppState>({
      ...initialState,
      profile: null,
    });
  });

  it("has no question displayed initially", () => {
    expect(store.getState()).toEqual<AppState>({
      ...initialState,
      displayedQuestion: null,
    });
  });

  it("asks for name when creating the profile", async () => {
    await store.dispatch(startProfileCreation());

    expect(store.getState()).toEqual<AppState>({
      ...initialState,
      profile: {
        name: null,
        "60minutesPhoneCallValue": null,
        "60minutesEasyTaskValue": null,
        monthlyIncome: null,
        monthlyWorkedHours: null,
        monthlyHoursSpentInTransport: null,
        satisfactionThreshold: null,
      },
      displayedQuestion: { id: "ASK_NAME" },
    });
  });
});
