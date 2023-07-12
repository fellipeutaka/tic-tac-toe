import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";

import "./styles/globals.css";

createRoot(document.getElementById("root") || document.body).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
