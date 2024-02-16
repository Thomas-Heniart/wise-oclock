import { DisplayedQuestionId } from "../../../../../hexagon/models/displayed-question";
import { AppState } from "../../../../../../store/reduxStore";

export const displayedQuestionVM = (state: AppState): DisplayedQuestionVM => {
  if (state.displayedQuestion) return state.displayedQuestion.id;
  return "";
};

export type DisplayedQuestionVM = DisplayedQuestionId | "";
