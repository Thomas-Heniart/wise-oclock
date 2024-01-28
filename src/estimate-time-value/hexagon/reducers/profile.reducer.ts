import { Profile } from "../models/profile";
import { UnknownAction } from "@reduxjs/toolkit";

import {
  INCOME_DETAILS_PROVIDED,
  IncomeDetailsAction,
  ONE_HOUR_EASY_TASK_VALUE_PROVIDED,
  ONE_HOUR_PHONE_CALL_VALUE_PROVIDED,
  OneHourEasyTaskValueProvidedAction,
  OneHourPhoneCallValueProvidedAction,
  PROFILE_CREATED,
  PROFILE_NAME_PROVIDED,
  ProfileNameProvidedAction,
  SATISFACTION_THRESHOLD_PROVIDED,
  SatisfactionThresholdAction,
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
      satisfactionThreshold: null,
    };
  if (action.type === PROFILE_NAME_PROVIDED)
    return {
      ...state!,
      name: (action as ProfileNameProvidedAction).payload.name,
    };
  if (action.type === ONE_HOUR_PHONE_CALL_VALUE_PROVIDED)
    return {
      ...state!,
      "60minutesPhoneCallValue": (action as OneHourPhoneCallValueProvidedAction)
        .payload.value,
    };
  if (action.type === ONE_HOUR_EASY_TASK_VALUE_PROVIDED)
    return {
      ...state!,
      "60minutesEasyTaskValue": (action as OneHourEasyTaskValueProvidedAction)
        .payload.value,
    };
  if (action.type === INCOME_DETAILS_PROVIDED)
    return {
      ...state!,
      ...(action as IncomeDetailsAction).payload,
    };
  if (action.type === SATISFACTION_THRESHOLD_PROVIDED)
    return {
      ...state!,
      ...(action as SatisfactionThresholdAction).payload,
    };
  return state;
};
