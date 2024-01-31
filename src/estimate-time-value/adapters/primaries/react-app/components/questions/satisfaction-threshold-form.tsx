import React, { FormEventHandler, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../../../store/reduxStore";
import { provideSatisfactionThreshold } from "../../../../../hexagon/use-cases/provide-satisfaction-threshold";
import { toNumberIfNotEmpty } from "../../../../../../misc/number";

import { calculateEstimatedTimeValue } from "../../../../../hexagon/use-cases/calculate-estimated-time-value";
import { estimatedProfileTimeValueVM } from "../../view-models-generator/estimated-profile-time-value";
import { ProfileTimeValue } from "../profile-time-value";

export const SatisfactionThresholdForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const estimatedTimeValue = useSelector(estimatedProfileTimeValueVM);
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(
      provideSatisfactionThreshold({ satisfactionThreshold: value as number }),
    ).then(() => dispatch(calculateEstimatedTimeValue()));
  };

  const [value, setValue] = useState<number | string>("");

  if (estimatedTimeValue !== null) return <ProfileTimeValue />;

  return (
    <form onSubmit={onSubmit}>
      <article>
        <header>
          You're now going to make an estimate, and this is the most complex
          stage. <br />
          You need to estimate how much you would like to earn per hour worked
          in order to feel «satisfied». <br />
          We're not talking about a minimum amount, and even less about a
          fantasy of an exorbitant amount. You should note down the amount you
          think is reasonable.
          <br />
          For example, the first time I did this exercise, I wrote down 12
          dollars.
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
