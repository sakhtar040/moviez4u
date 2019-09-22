import { RECENTLY_UPLOADED_MOVIES, MOST_VIEWED } from "../actions/actions";

const initialState = {
	recentlyUploaded: null,
	mostViewed: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case MOST_VIEWED:
			return {
				...state,
				mostViewed: action.payload
			};

		case RECENTLY_UPLOADED_MOVIES:
			return {
				...state,
				recentlyUploaded: action.payload
			};

		default:
			return state;
	}
}
