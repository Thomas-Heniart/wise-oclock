import { Profile } from "../models/profile";
import { UnknownAction } from "@reduxjs/toolkit";

import { PROFILE_CREATED, ProfileCreatedAction } from "../../../store/actions";

export const profileReducer = (
  state: Profile | null = null,
  action: UnknownAction,
) => {
  if (action.type === PROFILE_CREATED)
    return {
      name: (action as ProfileCreatedAction).payload.name,
      "60minutesPhoneCallValue": null,
      "60minutesEasyTaskValue": null,
      monthlyWorkedHours: null,
      monthlyHoursSpentInTransport: null,
      monthlyIncome: null,
    };
  return state;
};
