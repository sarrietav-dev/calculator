import formulaReducer from "./formula";

const { combineReducers } = require("redux");
const { default: currentContentReducer } = require("./currentContent");

const rootReducer = combineReducers({
    currentContent: currentContentReducer,
    formula: formulaReducer
});

export default rootReducer;