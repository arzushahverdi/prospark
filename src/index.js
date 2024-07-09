import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ArrayProvider } from "./context/arrayContext";
import { StrategyProvider } from "./context/strategyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ArrayProvider>
    <StrategyProvider>
      <App />
    </StrategyProvider>
  </ArrayProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
