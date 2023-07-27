import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RootStore } from "./state/RootStore";
import { StoreProvider } from "./state/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rootStore = new RootStore();

root.render(
  <React.StrictMode>
    <StoreProvider value={rootStore}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);

reportWebVitals();
