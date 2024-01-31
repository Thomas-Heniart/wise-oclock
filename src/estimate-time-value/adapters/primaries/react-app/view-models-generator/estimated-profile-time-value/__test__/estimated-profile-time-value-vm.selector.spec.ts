import {
  initReduxStore,
  ReduxStore,
} from "../../../../../../../store/reduxStore";
import {
  PROFILE_CREATED,
  TIME_VALUE_ESTIMATED,
} from "../../../../../../../store/actions";
import { estimatedProfileTimeValueVM } from "../index";

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
      store.dispatch({ type: PROFILE_CREATED });
    });

    it("shows profile estimated time value", () => {
      store.dispatch({
        type: TIME_VALUE_ESTIMATED,
        payload: { estimatedTimeValue: 12 },
      });

      expect(estimatedProfileTimeValueVM(store.getState())).toEqual(12);
    });
  });
});
