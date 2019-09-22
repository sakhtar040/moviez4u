import axios from "axios";
import { RECENTLY_UPLOADED_MOVIES, MOST_VIEWED } from "./actions";

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
