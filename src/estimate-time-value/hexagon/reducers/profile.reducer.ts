import { Profile } from "../models/profile";
import { UnknownAction } from "@reduxjs/toolkit";

import {
  PROFILE_CREATED,
  PROFILE_NAME_PROVIDED,
  ProfileNameProvidedAction,
} from "../../../store/actions";

export const profileReducer = (
  state: Profile | null = null,
  action: UnknownAction,
) => {
  if (action.type === PROFILE_CREATED)
    return {
      name: null,
      "60minutesPhoneCallValue": null,
      "60minutesEasyTaskValue": null,
      monthlyWorkedHours: null,
      monthlyHoursSpentInTransport: null,
      monthlyIncome: null,
    };
  if (action.type === PROFILE_NAME_PROVIDED)
    return {
      ...state!,
      name: (action as ProfileNameProvidedAction).payload.name,
    };
  return state;
};
