import React, { FormEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../../store/reduxStore";
import { oneHourPhoneCallValue } from "../../../../../hexagon/use-cases/one-hour-phone-call-value";
import { toNumberIfNotEmpty } from "../../../../../../misc/number";

export const OneHourPhoneCallValueForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(oneHourPhoneCallValue({ value: value as number }));
  };

  const [value, setValue] = useState<number | string>("");

  return (
    <form onSubmit={onSubmit}>
      <article>
        <header>
          Imagine if I asked you to spend an hour on the phone, doing nothing
          but waiting your turn, to win a gift card. waiting for your turn, to
          win a gift card that you can spend anywhere. that you can spend
          anywhere. <br />
          What would the minimum cost of this gift card be for you to wait to
          wait patiently on the phone for 60 minutes?
        </header>
        <div>
          <input
            type={"number"}
            placeholder={"$"}
            required={true}
            value={value}
            min={0}
            onChange={(e) => setValue(toNumberIfNotEmpty(e.target.value))}
          />
          <button type={"submit"}>Next</button>
        </div>
      </article>
    </form>
  );
};
