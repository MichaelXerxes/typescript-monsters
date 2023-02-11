import { combineReducers } from "redux";
import { randomJsonReducer } from "./random-json/random-json.reducer";

export const RootReducer=combineReducers({
    json:randomJsonReducer,
});