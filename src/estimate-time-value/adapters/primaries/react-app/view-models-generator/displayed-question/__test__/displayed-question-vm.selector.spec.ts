import {
  initReduxStore,
  ReduxStore,
} from "../../../../../../../store/reduxStore";
import { PROFILE_CREATED } from "../../../../../../../store/actions";
import { displayedQuestionVM } from "../index";

describe("Displayed question view models generator", () => {
  let store: ReduxStore;

  beforeEach(() => {
    store = initReduxStore({});
  });

  it("does not show any question initially", () => {
    expect(displayedQuestionVM(store.getState())).toEqual("");
  });

  it("displays current question", () => {
    store.dispatch({ type: PROFILE_CREATED, payload: { name: "John Doe" } });

    expect(displayedQuestionVM(store.getState())).toEqual(
      store.getState().displayedQuestion?.id,
    );
  });
});
