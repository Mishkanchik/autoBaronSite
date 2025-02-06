export const ADD_CAR = "ADD_CAR";
export const SET_CARS = "SET_CARS";

export const addCar = (car) => ({
	type: ADD_CAR,
	payload: car,
});

export const setCars = (cars) => ({
	type: SET_CARS,
	payload: cars,
});
