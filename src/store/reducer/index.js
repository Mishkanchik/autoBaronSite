import { combineReducers } from "@reduxjs/toolkit";
import carReducer from "./CarReduser";
export const rootReducer = combineReducers({
	cars: carReducer,
});
