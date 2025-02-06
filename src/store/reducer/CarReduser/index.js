import { ADD_CAR, SET_CARS } from "./actions";

const initialState = {
	cars: [],
};

const carReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CARS:
			return { ...state, cars: action.payload };

		case ADD_CAR:
			const updatedCars = [...state.cars, action.payload];
			localStorage.setItem("cars", JSON.stringify(updatedCars));
			return { ...state, cars: updatedCars };

		default:
			return state;
	}
};

export default carReducer;
