import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Honeybadger, HoneybadgerErrorBoundary } from "@honeybadger-io/react";

const config = {
  apiKey: ${{ process.env.HONEBADGER_API }},
  environment: "production",
};
const honeybadger = Honeybadger.configure(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HoneybadgerErrorBoundary honeybadger={honeybadger}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HoneybadgerErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
