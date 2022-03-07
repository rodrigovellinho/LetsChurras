import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ChurrasProvider } from "./store/ChurrasProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ChurrasProvider>
        <App />
      </ChurrasProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
