import {
	GET_GENRE_MOVIES,
	MOVIES_LOADING,
	GET_YEAR_MOVIES
} from "../actions/actions";

const initialState = {
	movie: null,
	movies: null,
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case MOVIES_LOADING:
			return {
				...state,
				loading: true
			};

		case GET_GENRE_MOVIES:
			return {
				...state,
				movies: action.payload,
				loading: false
			};

		case GET_YEAR_MOVIES:
			return {
				...state,
				movies: action.payload,
				loading: false
			};

		default:
			return state;
	}
}
