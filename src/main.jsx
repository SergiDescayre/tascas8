import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./context/ExpensesContext.jsx";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./translations/es/global.json"
import global_ca from "./translations/ca/global.json"
import global_en from "./translations/en/global.json"

i18next.init({
  interpolation: { escapeVaue: false },
  lng:"ca",
  resources:{
    es: {
      global: global_es,
    },
    ca: {
      global: global_ca,
    },
    en: {
      global: global_en
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n = {i18next}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </I18nextProvider>
  </React.StrictMode>
);
