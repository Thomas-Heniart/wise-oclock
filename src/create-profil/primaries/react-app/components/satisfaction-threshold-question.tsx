import React from "react";

export const SatisfactionThresholdQuestion = () => {
  return (
    <form>
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
          <input type={"number"} placeholder={"$"} required={true} />
          <button type={"submit"}>Next</button>
        </div>
      </article>
    </form>
  );
};
