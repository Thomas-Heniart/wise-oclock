import React from "react";

export const RealIncomesQuestion = () => {
  return (
    <form>
      <article>
        <header>
          Prenez l'ensemble de vos revenus issus de votre travail du mois
          dernier (s'ils sont fluctuants, faites-le sur une année pour obtenir
          une moyenne mensuelle). <br />
          Calculez maintenant tout le temps que vous avez passé à travailler
          pour obtenir ces revenus (s'ils sont fluctuants, faites-le également
          sur une année). <br />
          Enfin, calculez le temps que vous avez passé dans les transports pour
          obtenir ces revenus s is sont filuctuants, faites-e encore sur une
          année). <br />
          Tapez l'opération suivante sur une calculatrice : REVENUS / (TEMPS DE
          TRAVAIL + TEMPS DE TRANSPORT).
        </header>
        <div>
          <input type={"number"} placeholder={"$"} required={true} />
          <input type={"number"} placeholder={"Time in traffic"} />
          <button type={"submit"}>Next</button>
        </div>
      </article>
    </form>
  );
};
