import React, { FormEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../../store/reduxStore";
import { provideSatisfactionThreshold } from "../../../../../hexagon/use-cases/provide-satisfaction-threshold";
import { toNumberIfNotEmpty } from "../../../../../../misc/number";

export const SatisfactionThresholdForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(
      provideSatisfactionThreshold({ satisfactionThreshold: value as number }),
    ).then(() => {
      window.alert("This is the end of the app for now, come back later");
    });
  };

  const [value, setValue] = useState<number | string>("");

  return (
    <form onSubmit={onSubmit}>
      <article>
        <header>
          Vous allez maintenant faire une estimation, c'est l'étape la plus
          complexe. <br />
          Vous devez estimer combien vous souhaiteriez gagner par heure de
          travail pour vous sentir « satisfait ». <br />
          Il ne s'agit pas du montant minimum et encore moins d'un fantasme de
          montant exorbitant. <br />
          Vous devez noter le montant que vous trouvez raisonnable. <br />À
          titre d'exemple, la première fois que j'ai fait cet exercice, j'avais
          noté 12 euros.
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
