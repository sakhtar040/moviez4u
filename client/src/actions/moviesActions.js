import axios from "axios";
import {
	GET_MOVIES,
	GET_MOVIE,
	GET_HOLLYWOOD_MOVIES,
	GET_BOLLYWOOD_MOVIES,
	GET_DUBBED_MOVIES,
	GET_TV_SERIES,
	MOVIES_LOADING,
	GET_FEATURED_MOVIES,
	RECENTLY_UPLOADED_MOVIES,
	MOST_VIEWED,
	EMPTY_MOVIE,
	FEATURED_MOVIES
} from "./actions";

export const setMoviesLoading = () => {
	return {
		type: MOVIES_LOADING
	};
};

export const emptyMovie = () => {
	return {
		type: EMPTY_MOVIE
	};
};

export const getMovies = () => dispatch => {
	dispatch(setMoviesLoading());
	axios
		.get("/api/movies/all")
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

export const getHollywoodMovies = () => dispatch => {
	dispatch(setMoviesLoading());
	axios
		.get("/api/movies/hollywood")
		.then(res =>
			dispatch({
				type: GET_HOLLYWOOD_MOVIES,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_HOLLYWOOD_MOVIES,
				payload: null
			})
		);
};

export const getBollywoodMovies = () => dispatch => {
	dispatch(setMoviesLoading());
	axios
		.get("/api/movies/Bollywood")
		.then(res =>
			dispatch({
				type: GET_BOLLYWOOD_MOVIES,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_BOLLYWOOD_MOVIES,
				payload: null
			})
		);
};

export const getDubbedMovies = () => dispatch => {
	dispatch(setMoviesLoading());
	axios
		.get("/api/movies/dubbed")
		.then(res =>
			dispatch({
				type: GET_DUBBED_MOVIES,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_DUBBED_MOVIES,
				payload: null
			})
		);
};

export const getFeaturedMovies = () => dispatch => {
	dispatch(setMoviesLoading());
	axios
		.get("/api/movies/featured")
		.then(res =>
			dispatch({
				type: GET_FEATURED_MOVIES,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_FEATURED_MOVIES,
				payload: null
			})
		);
};

export const getLimtedFeaturedMovies = () => dispatch => {
	dispatch(setMoviesLoading());
	axios
		.get("/api/featured-movies")
		.then(res =>
			dispatch({
				type: FEATURED_MOVIES,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: FEATURED_MOVIES,
				payload: null
			})
		);
};

export const getTvSeries = () => dispatch => {
	dispatch(setMoviesLoading());
	axios
		.get("/api/tv-series/all")
		.then(res =>
			dispatch({
				type: GET_TV_SERIES,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_TV_SERIES,
				payload: null
			})
		);
};

export const getRecentlyUploadedMovies = () => dispatch => {
	axios
		.get("/api/recently-uploaded-movies")
		.then(res =>
			dispatch({
				type: RECENTLY_UPLOADED_MOVIES,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: RECENTLY_UPLOADED_MOVIES,
				payload: null
			})
		);
};

export const getMostViewedMovies = () => dispatch => {
	axios
		.get("/api/most-viewed")
		.then(res =>
			dispatch({
				type: MOST_VIEWED,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: MOST_VIEWED,
				payload: null
			})
		);
};

export const getSingleMovie = slug => dispatch => {
	dispatch(setMoviesLoading());
	axios
		.get(`/api/movie/watch/${slug}`)
		.then(res =>
			dispatch({
				type: GET_MOVIE,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_MOVIE,
				payload: null
			})
		);
};

export const getSingleSeries = slug => dispatch => {
	dispatch(setMoviesLoading());
	axios
		.get(`/api/series/watch/${slug}`)
		.then(res =>
			dispatch({
				type: GET_MOVIE,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_MOVIE,
				payload: null
			})
		);
};
