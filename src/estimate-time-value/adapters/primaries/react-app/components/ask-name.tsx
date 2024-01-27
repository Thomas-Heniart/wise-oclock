import { FormEventHandler, useState } from "react";
import { createProfile } from "../../../../hexagon/use-cases/create-profile";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../store/reduxStore";

export const AskName = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState("");

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(createProfile({ name }));
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        What's your name
        <input
          type={"text"}
          placeholder={"John Doe"}
          required={true}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type={"submit"}>Start</button>
    </form>
  );
};
