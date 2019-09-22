import {
	GET_MOVIES,
	GET_MOVIE,
	GET_HOLLYWOOD_MOVIES,
	GET_BOLLYWOOD_MOVIES,
	GET_DUBBED_MOVIES,
	GET_TV_SERIES,
	MOVIES_LOADING,
	GET_FEATURED_MOVIES,
	EMPTY_MOVIE,
	FEATURED_MOVIES
} from "../actions/actions";

const initialState = {
	movie: null,
	movies: null,
	featuredMovies: null,
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case MOVIES_LOADING:
			return {
				...state,
				loading: true
			};

		case EMPTY_MOVIE:
			return {
				...state,
				movie: null
			};

		case GET_MOVIE:
			return {
				...state,
				movie: action.payload,
				loading: false
			};

		case GET_MOVIES:
			return {
				...state,
				movies: action.payload,
				loading: false
			};

		case GET_HOLLYWOOD_MOVIES:
			return {
				...state,
				movies: action.payload,
				loading: false
			};

		case GET_BOLLYWOOD_MOVIES:
			return {
				...state,
				movies: action.payload,
				loading: false
			};

		case GET_DUBBED_MOVIES:
			return {
				...state,
				movies: action.payload,
				loading: false
			};

		case GET_FEATURED_MOVIES:
			return {
				...state,
				movies: action.payload,
				loading: false
			};

		case FEATURED_MOVIES:
			return {
				...state,
				featuredMovies: action.payload,
				loading: false
			};

		case GET_TV_SERIES:
			return {
				...state,
				movies: action.payload,
				loading: false
			};

		default:
			return state;
	}
}
