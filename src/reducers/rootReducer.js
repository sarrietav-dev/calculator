const { combineReducers } = require("redux");
const { default: currentContentReducer } = require("./currentContent");

const rootReducer = combineReducers({
    currentContent: currentContentReducer
});

export default rootReducer;