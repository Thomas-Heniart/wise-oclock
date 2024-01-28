import { FormEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../../store/reduxStore";

import { provideProfileName } from "../../../../../hexagon/use-cases/provide-profile-name";

export const AskName = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(provideProfileName({ name }));
  };

  const [name, setName] = useState("");

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
