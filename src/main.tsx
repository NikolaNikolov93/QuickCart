import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import App from "./App.tsx";
let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
