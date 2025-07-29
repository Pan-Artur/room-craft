import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./i18n";

import { App } from "./App";
import { GlobalStyles } from "./Index.styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
