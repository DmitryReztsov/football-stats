import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {competitionReducer} from "./competition/reducer";

export type RootState = ReturnType<typeof combinedReducer>

const combinedReducer = combineReducers({
    competition: competitionReducer,
});

export const store = createStore(combinedReducer,{}, applyMiddleware(thunk))

export default store;