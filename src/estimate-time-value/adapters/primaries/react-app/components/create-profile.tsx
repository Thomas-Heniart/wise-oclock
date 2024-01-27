import { useSelector } from "react-redux";
import { createProfileButtonVM } from "../view-models-generator/create-profile";
import { useState } from "react";
import { AskName } from "./ask-name";

export const CreateProfile = () => {
  const buttonVM = useSelector(createProfileButtonVM);

  const [showNameForm, setShowNameForm] = useState(false);

  return (
    <header>
      {!showNameForm && buttonVM.cssClasses.includes("show") && (
        <button type={"button"} onClick={() => setShowNameForm(true)}>
          {buttonVM.label}
        </button>
      )}
      {showNameForm && <AskName />}
    </header>
  );
};
