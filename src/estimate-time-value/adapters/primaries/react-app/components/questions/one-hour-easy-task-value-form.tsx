import React, { FormEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../../store/reduxStore";
import { oneHourEasyTaskValue } from "../../../../../hexagon/use-cases/one-hour-easy-task-value";
import { toNumberIfNotEmpty } from "../../../../../../misc/number";

export const OneHourEasyTaskValueForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(oneHourEasyTaskValue({ value: value as number }));
  };

  const [value, setValue] = useState<number | string>("");

  return (
    <form onSubmit={onSubmit}>
      <article>
        <header>
          You have to carry out a simple, repetitive task for an hour. This task
          doesn't do anything special for you in any way, but it must be
          absolutely must be done for a whole hour. <br />
          How much would you be prepared to spend if I did this task for you for
          for 60 minutes?
        </header>
        <div>
          <input
            type={"number"}
            placeholder={"1$"}
            required={true}
            value={value}
            onChange={(e) => setValue(toNumberIfNotEmpty(e.target.value))}
          />
          <button type={"submit"}>Next</button>
        </div>
      </article>
    </form>
  );
};
