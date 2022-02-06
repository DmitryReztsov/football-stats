import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {competitionReducer} from "./competition/reducer";
import {matchReducer} from "./match/reducer";
import {searchReducer} from "./search/reducer";
import {teamReducer} from "./team/reducer";

export type RootState = ReturnType<typeof combinedReducer>

const combinedReducer = combineReducers({
  competition: competitionReducer,
  matches: matchReducer,
  search: searchReducer,
  team: teamReducer,
});

const composeEnhancers = composeWithDevTools({});

export const store = createStore(combinedReducer, {}, composeEnhancers(applyMiddleware(thunk)));
