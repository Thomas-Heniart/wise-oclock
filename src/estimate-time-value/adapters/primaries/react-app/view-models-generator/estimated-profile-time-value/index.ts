import { AppState } from "../../../../../../store/appState";

export const estimatedProfileTimeValueVM = (state: AppState) => {
  if (!state.profile) return null;
  return state.profile.estimatedTimeValue;
};
