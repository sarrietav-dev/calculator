const currentNumberReducer = (state = "", action) => {
    switch (action.type) {
        case "APPEND_NUMBER":
            return state + action.payload;
        default:
            return state;
    }
}

export default currentNumberReducer;