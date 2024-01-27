import { AppState } from "../../../../../../store/appState";
import { DisplayedQuestionId } from "../../../../../hexagon/models/displayed-question";

export const displayedQuestionVM = (state: AppState): DisplayedQuestionVM => {
  if (state.displayedQuestion) return state.displayedQuestion.id;
  return "";
};

export type DisplayedQuestionVM = DisplayedQuestionId | "";
