import { DisplayedQuestion } from "../models/displayed-question";
import { UnknownAction } from "@reduxjs/toolkit";

import { PROFILE_CREATED } from "../../../store/actions";

export const displayedQuestionReducer = (
  state: DisplayedQuestion | null = null,
  action: UnknownAction,
) => {
  if (action.type === PROFILE_CREATED)
    return {
      id: "60_MINUTES_PHONE_CALL_VALUE_TO_GET_GIFT_CARD",
    } satisfies DisplayedQuestion;
  return state;
};
