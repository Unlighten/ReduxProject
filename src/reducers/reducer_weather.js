import { FETCH_WEATHER } from "../actions";

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER:
        //concat creates a new array
        // return state.concat([action.payload.data])
        //these two lines are the same thing, just the one below is es6
        return [ action.payload.data, ...state]
    }
    return state
}