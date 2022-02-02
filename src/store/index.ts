import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {competitionReducer} from "./competition/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {matchReducer} from "./match/reducer";

export type RootState = ReturnType<typeof combinedReducer>

const combinedReducer = combineReducers({
  competition: competitionReducer,
  matches: matchReducer,
});

const composeEnhancers = composeWithDevTools({});

export const store = createStore(combinedReducer, {}, composeEnhancers(applyMiddleware(thunk)));
