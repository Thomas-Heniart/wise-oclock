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
          Vous devez exécuter une tâche simple et répétitive pendant une heure.
          Cette tâche ne vous apporte rien de spécial à aucun niveau mais elle
          doit être faite absolument pendant une heure entière. <br />
          Combien seriez-vous prêt à dépenser au maximum pour que je fasse cette
          tâche pour vous pendant 60 minutes?
        </header>
        <div>
          <input
            type={"number"}
            placeholder={"$"}
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
