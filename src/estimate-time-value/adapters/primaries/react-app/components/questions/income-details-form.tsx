import React, { FormEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../../store/reduxStore";
import { provideIncomeDetail } from "../../../../../hexagon/use-cases/provide-income-details";
import { toNumberIfNotEmpty } from "../../../../../../misc/number";

export const IncomeDetailsForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(
      provideIncomeDetail({
        monthlyIncome: monthlyIncome as number,
        monthlyWorkedHours: monthlyWorkedHours as number,
        monthlyHoursSpentInTransport: monthlyHoursSpentInTransport as number,
      }),
    );
  };

  const [monthlyIncome, setMonthlyIncome] = useState<number | string>("");
  const [monthlyWorkedHours, setMonthlyWorkedHours] = useState<number | string>(
    "",
  );
  const [monthlyHoursSpentInTransport, setMonthlyHoursSpentInTransport] =
    useState<number | string>("");

  return (
    <form onSubmit={onSubmit}>
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
          <input
            type={"number"}
            placeholder={"Monthly Income"}
            required={true}
            value={monthlyIncome}
            onChange={(e) =>
              setMonthlyIncome(toNumberIfNotEmpty(e.target.value))
            }
          />
          <input
            type={"number"}
            placeholder={"Monthly worked hours"}
            required={true}
            value={monthlyWorkedHours}
            onChange={(e) =>
              setMonthlyWorkedHours(toNumberIfNotEmpty(e.target.value))
            }
          />
          <input
            type={"number"}
            placeholder={"Monthly hours spent in transport"}
            required={true}
            value={monthlyHoursSpentInTransport}
            onChange={(e) =>
              setMonthlyHoursSpentInTransport(
                toNumberIfNotEmpty(e.target.value),
              )
            }
          />
          <button type={"submit"}>Next</button>
        </div>
      </article>
    </form>
  );
};
