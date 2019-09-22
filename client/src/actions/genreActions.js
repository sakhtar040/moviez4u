import axios from "axios";
import { GET_GENRE_MOVIES, MOVIES_LOADING, GET_YEAR_MOVIES } from "./actions";

export const setMoviesLoading = () => {
	return {
		type: MOVIES_LOADING
	};
};

export const getGenreMovies = genre => dispatch => {
	dispatch(setMoviesLoading());
	axios
		.get(`/api/genre/${genre}`)
		.then(res =>
			dispatch({
				type: GET_GENRE_MOVIES,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_GENRE_MOVIES,
				payload: null
			})
		);
};

export const getYearMovies = year => dispatch => {
	dispatch(setMoviesLoading());
	axios
		.get(`/api/year/${year}`)
		.then(res =>
			dispatch({
				type: GET_YEAR_MOVIES,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_YEAR_MOVIES,
				payload: null
			})
		);
};
