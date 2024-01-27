import React from "react";
import { GiftCardQuestion } from "./estimate-time-value/adapters/primaries/react-app/components/gift-card-question";
import { EasyTaskQuestion } from "./estimate-time-value/adapters/primaries/react-app/components/easy-task-question";
import { RealIncomesQuestion } from "./estimate-time-value/adapters/primaries/react-app/components/real-incomes-question";
import { SatisfactionThresholdQuestion } from "./estimate-time-value/adapters/primaries/react-app/components/satisfaction-threshold-question";

function App() {
  return (
    <>
      <header>
        <h1>Wise O'Clock</h1>
      </header>
      <main>
        <GiftCardQuestion />
        <EasyTaskQuestion />
        <RealIncomesQuestion />
        <SatisfactionThresholdQuestion />
      </main>
    </>
  );
}

export default App;
