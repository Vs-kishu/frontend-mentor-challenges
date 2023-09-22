import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </Provider>
  </StrictMode>
);
