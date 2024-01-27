import { useDispatch, useSelector } from "react-redux";
import { JSX, MouseEventHandler } from "react";
import { AskName } from "./questions/ask-name";
import { GiftCardQuestion } from "./questions/gift-card-question";
import {
  displayedQuestionVM,
  DisplayedQuestionVM,
} from "../view-models-generator/displayed-question";
import { AppDispatch } from "../../../../../store/reduxStore";

import { startProfileCreation } from "../../../../hexagon/use-cases/start-profile-creation";

export const CreateProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const displayedQuestionId = useSelector(displayedQuestionVM);

  const onNewProfileClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    dispatch(startProfileCreation());
  };

  const viewsFactory: Record<DisplayedQuestionVM, () => JSX.Element | null> = {
    "": () => (
      <button type={"button"} onClick={onNewProfileClick}>
        New profile
      </button>
    ),
    ASK_NAME: () => <AskName />,
    "60_MINUTES_PHONE_CALL_VALUE_TO_GET_GIFT_CARD": () => <GiftCardQuestion />,
    "60_MINUTES_EASY_TASK_VALUE": () => <GiftCardQuestion />,
    INCOME: () => <GiftCardQuestion />,
    SATISFACTION_THRESHOLD: () => <GiftCardQuestion />,
  };

  return <header>{viewsFactory[displayedQuestionId]()}</header>;
};
