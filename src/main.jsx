import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
/* import store from "./redux/store/index.js";
import { Provider } from "react-redux"; */

createRoot(document.getElementById("root")).render(
  /*  <Provider store={store}> */
  <App />
  /* </Provider> */
);
