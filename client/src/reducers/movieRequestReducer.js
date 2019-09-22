import {
	REQUEST_MOVIE,
	ALL_MOVIES_REQUESTS,
	MOVIES_LOADING
} from "../actions/actions";

const initialState = {
	movieRequests: [],
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case MOVIES_LOADING:
			return {
				...state,
				loading: true
			};

		case REQUEST_MOVIE:
			return {
				...state,
				movieRequests: [action.payload, ...state.movieRequests]
			};

		case ALL_MOVIES_REQUESTS:
			return {
				...state,
				movieRequests: action.payload,
				loading: false
			};

		default:
			return state;
	}
}
