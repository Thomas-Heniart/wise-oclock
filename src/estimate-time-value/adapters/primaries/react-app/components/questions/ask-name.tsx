import { FormEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../../store/reduxStore";

import { startProfileCreation } from "../../../../../hexagon/use-cases/start-profile-creation";

export const AskName = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState("");

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    //TODO Invalid
    dispatch(startProfileCreation());
  };

  return (
    <form onSubmit={onSubmit}>
      <article>
        <header>What's your name?</header>
        <div>
          <input
            type={"text"}
            placeholder={"John Doe"}
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type={"submit"}>Start</button>
        </div>
      </article>
    </form>
  );
};
