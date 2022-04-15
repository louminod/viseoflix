import {combineReducers} from "redux";
import mediaReducer from "./mediaReducer";
import homeReducer from "./homeReducer";

const reducers = combineReducers({
    medias: mediaReducer,
    home: homeReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;