const initialState = {
    current: ""
}

const formulaReducer = (state = initialState, action) => {
    switch (action.type) {
        case "APPEND_NUMBER":
            if (state.current.length === 10) {
                return state;
            }
            return {
                current: state.current + action.payload,
            };
        case "CLEAR":
            return {
                current: "",
            }
        case "ADD":
            return {
                current: state.current + "+"
            }
        default:
            return state
    }
}

export default formulaReducer;