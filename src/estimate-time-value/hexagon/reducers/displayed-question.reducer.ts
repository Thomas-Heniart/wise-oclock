import { DisplayedQuestion } from "../models/displayed-question";
import { UnknownAction } from "@reduxjs/toolkit";

import { PROFILE_CREATED } from "../../../store/actions";

export const displayedQuestionReducer = (
  state: DisplayedQuestion | null = null,
  action: UnknownAction,
) => {
  if (action.type === PROFILE_CREATED)
    return {
      id: "ASK_NAME",
    } satisfies DisplayedQuestion;
  return state;
};
