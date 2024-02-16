import { AppState } from "../../../../../../store/reduxStore";

export const estimatedProfileTimeValueVM = (state: AppState) => {
  if (!state.profile) return null;
  return state.profile.estimatedTimeValue;
};
