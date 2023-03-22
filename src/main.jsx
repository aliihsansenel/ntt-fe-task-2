import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import store from "./store";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import ThemeComponent from "./theme/ThemeComponent";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeComponent>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeComponent>
    </React.StrictMode>
);
