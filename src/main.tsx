import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/Router/Router";
import { Provider } from "react-redux";
import store from "@/store/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
);
