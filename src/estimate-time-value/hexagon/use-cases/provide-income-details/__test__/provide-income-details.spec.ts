import {
  AppState,
  initReduxStore,
  ReduxStore,
} from "../../../../../store/reduxStore";
import { provideIncomeDetail } from "../index";
import { profileSlice } from "../../../reducers/profile.reducer";

describe("Provide income details", () => {
  let store: ReduxStore;
  let initialState: AppState;

  beforeEach(() => {
    store = initReduxStore({});
    store.dispatch(profileSlice.actions.createProfile());
    store.dispatch(profileSlice.actions.setName({ name: "John Doe" }));
    initialState = store.getState();
  });

  it("asks for satisfaction threshold after providing income details", async () => {
    await store.dispatch(
      provideIncomeDetail({
        monthlyWorkedHours: 140,
        monthlyHoursSpentInTransport: 40,
        monthlyIncome: 2360,
      }),
    );

    expect(store.getState()).toEqual<AppState>({
      ...initialState,
      profile: {
        ...initialState.profile!,
        monthlyWorkedHours: 140,
        monthlyHoursSpentInTransport: 40,
        monthlyIncome: 2360,
      },
      displayedQuestion: { id: "SATISFACTION_THRESHOLD" },
    });
  });
});
