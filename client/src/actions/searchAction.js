import axios from "axios";
import { GET_MOVIES, MOVIES_LOADING } from "./actions";

export const setMoviesLoading = () => {
	return {
		type: MOVIES_LOADING
	};
};

export const getSearchMovies = searchItem => dispatch => {
	dispatch(setMoviesLoading());
	axios
		.get(`/api/search/${searchItem}`)
		.then(res =>
			dispatch({
				type: GET_MOVIES,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_MOVIES,
				payload: null
			})
		);
};
