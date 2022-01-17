import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {competitionReducer} from "./competition/reducer";
import {loadingReducer} from "./loading/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {errorReducer} from "./error/reducer";

export type RootState = ReturnType<typeof combinedReducer>

const combinedReducer = combineReducers({
    competition: competitionReducer,
    loading: loadingReducer,
    error: errorReducer,
});

const composeEnhancers = composeWithDevTools({});

export const store = createStore(combinedReducer,{}, composeEnhancers(applyMiddleware(thunk)));
