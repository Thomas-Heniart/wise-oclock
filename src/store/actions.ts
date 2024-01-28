export const PROFILE_CREATED = "PROFILE_CREATED";
export const PROFILE_NAME_PROVIDED = "PROFILE_NAME_PROVIDED";

export type ProfileNameProvidedAction = {
  type: typeof PROFILE_NAME_PROVIDED;
  payload: { name: string };
};

export const ONE_HOUR_PHONE_CALL_VALUE_PROVIDED =
  "ONE_HOUR_PHONE_CALL_VALUE_PROVIDED";

export type OneHourPhoneCallValueProvidedAction = {
  type: typeof ONE_HOUR_PHONE_CALL_VALUE_PROVIDED;
  payload: { value: string };
};

export const ONE_HOUR_EASY_TASK_VALUE_PROVIDED =
  "ONE_HOUR_EASY_TASK_VALUE_PROVIDED";

export type OneHourEasyTaskValueProvidedAction = {
  type: typeof ONE_HOUR_PHONE_CALL_VALUE_PROVIDED;
  payload: { value: string };
};

export const INCOME_DETAILS_PROVIDED = "INCOME_DETAILS_PROVIDED";

export type IncomeDetailsAction = {
  type: typeof INCOME_DETAILS_PROVIDED;
  payload: {
    monthlyWorkedHours: number;
    monthlyHoursSpentInTransport: number;
    monthlyIncome: number;
  };
};

export const SATISFACTION_THRESHOLD_PROVIDED =
  "SATISFACTION_THRESHOLD_PROVIDED";

export type SatisfactionThresholdAction = {
  type: typeof SATISFACTION_THRESHOLD_PROVIDED;
  payload: {
    satisfactionThreshold: number;
  };
};
