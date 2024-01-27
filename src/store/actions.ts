export const PROFILE_CREATED = "PROFILE_CREATED";

export type ProfileCreatedAction = {
  type: typeof PROFILE_CREATED;
  payload: { name: string };
};
