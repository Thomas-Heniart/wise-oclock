import {
  initReduxStore,
  ReduxStore,
} from "../../../../../../../store/reduxStore";
import { estimatedProfileTimeValueVM } from "../index";
import { profileSlice } from "../../../../../../hexagon/reducers/profile.reducer";

describe("Estimated profile time value view models generator", () => {
  let store: ReduxStore;

  beforeEach(() => {
    store = initReduxStore({});
  });

  it("does not have an estimated value initially", () => {
    expect(estimatedProfileTimeValueVM(store.getState())).toEqual(null);
  });

  describe("With an existing profile", () => {
    beforeEach(() => {
      store.dispatch(profileSlice.actions.createProfile());
    });

    it("shows profile estimated time value", () => {
      store.dispatch(
        profileSlice.actions.setEstimatedTimeValue({ estimatedTimeValue: 12 }),
      );

      expect(estimatedProfileTimeValueVM(store.getState())).toEqual(12);
    });
  });
});
