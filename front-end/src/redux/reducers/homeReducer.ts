import {Action} from "../actions";
import {HomeType} from "../action-types";

const initialState = HomeType.LANDING;

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case HomeType.LANDING:
            return action.type;
        case HomeType.MEDIA:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;