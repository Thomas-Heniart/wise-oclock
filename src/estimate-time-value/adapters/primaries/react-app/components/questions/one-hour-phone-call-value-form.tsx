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
          Imaginez que je vous propose de passer une heure au télé-phone, sans
          rien faire d'autre quattendre votre tour, pour gagner une carte cadeau
          que vous pourrez dépenser n'importe où. <br />
          Combien devrait coûter au minimum cette carte cadeau pour que vous
          patientiez sagement au téléphone durant 60 minutes ?
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
