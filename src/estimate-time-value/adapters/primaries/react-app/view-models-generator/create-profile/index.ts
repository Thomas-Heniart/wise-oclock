import { AppState } from "../../../../../../store/appState";

export type CreateProfileButtonVM = {
  cssClasses: Array<string>;
  label: string;
};

export const createProfileButtonVM = (
  state: AppState,
): CreateProfileButtonVM => {
  const cssClasses = state.profile ? ["hidden"] : ["show"];
  return {
    cssClasses,
    label: "Create a profile",
  };
};
