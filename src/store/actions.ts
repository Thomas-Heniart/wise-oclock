export const PROFILE_CREATED = "PROFILE_CREATED";
export const PROFILE_NAME_PROVIDED = "PROFILE_NAME_PROVIDED";

export type ProfileNameProvidedAction = {
  type: typeof PROFILE_NAME_PROVIDED;
  payload: { name: string };
};
