import {HomeType, MediaType} from "../action-types";

interface MediaAction {
    type: MediaType,
    payload: object[]
}

interface HomeAction {
    type: HomeType,
    payload?: object
}

export type Action = MediaAction | HomeAction;
