import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import genresReducer from "./genresReducer";
import movieRequestReducer from "./movieRequestReducer";
import sidebarReducer from "./sidebarReducer";

export default combineReducers({
	movies: moviesReducer,
	genres: genresReducer,
	movieRequests: movieRequestReducer,
	sidebar: sidebarReducer
});
