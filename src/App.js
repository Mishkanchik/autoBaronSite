import { Route, Routes } from "react-router";
import "./App.css";

import DefaultLoyout from "./defaultLayout/defaultLoyout";

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<DefaultLoyout />}></Route>
			</Routes>
		</>
	);
}

export default App;
