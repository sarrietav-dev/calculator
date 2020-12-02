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
                number: state.number + action.payload,
                isInLimit: false
            };
        case "CLEAR":
            return {
                number: "",
                isInLimit: false
            }
        default:
            return state;
    }
}

export default currentNumberReducer;