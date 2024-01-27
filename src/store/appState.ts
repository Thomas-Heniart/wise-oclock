import { Profile } from "../estimate-time-value/hexagon/models/profile";
import { DisplayedQuestion } from "../estimate-time-value/hexagon/models/displayed-question";

export interface AppState {
  profile: Profile | null;
  displayedQuestion: DisplayedQuestion | null;
}
