const { combineReducers } = require("redux");
const { default: currentNumberReducer } = require("./currentNumber");

const rootReducer = combineReducers({
    currentNumber: currentNumberReducer
});

export default rootReducer;