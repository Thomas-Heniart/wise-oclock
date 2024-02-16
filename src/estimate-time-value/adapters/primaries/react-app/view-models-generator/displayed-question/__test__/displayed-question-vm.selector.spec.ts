import {
  initReduxStore,
  ReduxStore,
} from "../../../../../../../store/reduxStore";
import { displayedQuestionVM } from "../index";
import { profileSlice } from "../../../../../../hexagon/reducers/profile.reducer";

describe("Displayed question view models generator", () => {
  let store: ReduxStore;

  beforeEach(() => {
    store = initReduxStore({});
  });

  it("does not show any question initially", () => {
    expect(displayedQuestionVM(store.getState())).toEqual("");
  });

  it("displays current question", () => {
    store.dispatch(profileSlice.actions.createProfile());

    expect(displayedQuestionVM(store.getState())).toEqual(
      store.getState().displayedQuestion?.id,
    );
  });
});
