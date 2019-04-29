import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import pt from "react-intl/locale-data/pt";
import { flattenMessages } from "./utils";
import messages from "./messages";
addLocaleData([...en, ...pt]);

let params = new URLSearchParams(document.location.search.substring(1));
let locale = params.get("lang") || "pt-BR";

ReactDOM.render(
  <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
    <App />
  </IntlProvider>,
  document.getElementById("root")
);
