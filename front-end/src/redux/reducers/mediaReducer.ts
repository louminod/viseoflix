import {Action} from "../actions";
import {MediaType} from "../action-types";

const initialState = [];

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case MediaType.ALL:
            return action.payload;
        case MediaType.SERIES:
            return action.payload;
        case MediaType.MOVIES:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;