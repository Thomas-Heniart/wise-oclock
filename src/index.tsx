import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initReduxStore } from "./store/reduxStore";
import { Provider } from "react-redux";
import { InMemoryQuestionGateway } from "./estimate-time-value/adapters/secondaries/gateways/in-memory/in-memory-question.gateway";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const questionGateway = new InMemoryQuestionGateway();

const store = initReduxStore({ questionGateway });

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
