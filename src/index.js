import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App";
import { store } from "./store/index";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
