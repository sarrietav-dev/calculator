const initialState = {
    number: "",
    isInLimit: false
};

const currentNumberReducer = (state = initialState, action) => {
    switch (action.type) {
        case "APPEND_NUMBER":
            if (state.number.length === 10) {
                return {
                    ...state,
                    isInLimit: true
                }
            }
            return {
                ...state,
                number: state.number + action.payload
            };
        default:
            return state;
    }
}

export default currentNumberReducer;