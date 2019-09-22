import axios from "axios";
import { REQUEST_MOVIE, ALL_MOVIES_REQUESTS, MOVIES_LOADING } from "./actions";

export const setMoviesLoading = () => {
	return {
		type: MOVIES_LOADING
	};
};

export const requestMovie = requestData => dispatch => {
	axios
		.post(`/api/movie-request`, requestData)
		.then(res =>
			dispatch({
				type: REQUEST_MOVIE,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: REQUEST_MOVIE,
				payload: null
			})
		);
};

export const getMovieRequests = () => dispatch => {
	dispatch(setMoviesLoading());
	axios
		.get("/api/movie-requests")
		.then(res =>
			dispatch({
				type: ALL_MOVIES_REQUESTS,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: ALL_MOVIES_REQUESTS,
				payload: null
			})
		);
};
