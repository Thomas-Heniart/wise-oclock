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

  const inputStyle = {
    marginTop: "calc(var(--block-spacing-vertical) * 0.5)",
  };

  return (
    <form onSubmit={onSubmit}>
      <article>
        <header>
          Take all your income from work for the last month (if it fluctuates,
          do it over a year to obtain a monthly average).
          <input
            style={inputStyle}
            type={"number"}
            placeholder={"Monthly Income"}
            required={true}
            value={monthlyIncome}
            onChange={(e) =>
              setMonthlyIncome(toNumberIfNotEmpty(e.target.value))
            }
          />
        </header>
        <main>
          Now calculate all the time you spent working to obtain this income (if
          it fluctuates, do this over a year as well).
          <input
            style={inputStyle}
            type={"number"}
            placeholder={"Monthly worked hours"}
            required={true}
            value={monthlyWorkedHours}
            onChange={(e) =>
              setMonthlyWorkedHours(toNumberIfNotEmpty(e.target.value))
            }
          />
        </main>
        <footer>
          Finally, calculate the amount of time you have spent in transport to
          obtain this income (if it is substantial, do it again over a year).
          <input
            style={inputStyle}
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
          <button style={inputStyle} type={"submit"}>
            Next
          </button>
        </footer>
      </article>
    </form>
  );
};
