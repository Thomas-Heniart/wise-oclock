import {
  initReduxStore,
  ReduxStore,
} from "../../../../../../../store/reduxStore";
import { PROFILE_CREATED } from "../../../../../../../store/actions";
import { CreateProfileButtonVM, createProfileButtonVM } from "../index";

describe("Create profile view models generator", () => {
  let store: ReduxStore;

  beforeEach(() => {
    store = initReduxStore({});
  });

  it("should be able to create a profile initially", () => {
    expect(
      createProfileButtonVM(store.getState()),
    ).toEqual<CreateProfileButtonVM>({
      cssClasses: ["show"],
      label: "Create a profile",
    });
  });

  it("hides the button when creating a profile", () => {
    store.dispatch({ type: PROFILE_CREATED, payload: { name: "John Doe" } });

    expect(
      createProfileButtonVM(store.getState()),
    ).toEqual<CreateProfileButtonVM>({
      cssClasses: ["hidden"],
      label: "Create a profile",
    });
  });
});
