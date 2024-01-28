import { useDispatch, useSelector } from "react-redux";
import { JSX, MouseEventHandler } from "react";
import { AskName } from "./questions/ask-name";
import { OneHourPhoneCallValueForm } from "./questions/one-hour-phone-call-value-form";
import {
  displayedQuestionVM,
  DisplayedQuestionVM,
} from "../view-models-generator/displayed-question";
import { AppDispatch } from "../../../../../store/reduxStore";

import { startProfileCreation } from "../../../../hexagon/use-cases/start-profile-creation";
import { OneHourEasyTaskValueForm } from "./questions/one-hour-easy-task-value-form";
import { IncomeDetailsForm } from "./questions/income-details-form";
import { SatisfactionThresholdForm } from "./questions/satisfaction-threshold-form";

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
    "60_MINUTES_PHONE_CALL_VALUE_TO_GET_GIFT_CARD": () => (
      <OneHourPhoneCallValueForm />
    ),
    "60_MINUTES_EASY_TASK_VALUE": () => <OneHourEasyTaskValueForm />,
    INCOME: () => <IncomeDetailsForm />,
    SATISFACTION_THRESHOLD: () => <SatisfactionThresholdForm />,
  };

  return <header>{viewsFactory[displayedQuestionId]()}</header>;
};
