const initialState = {
    current: ""
}

const formulaReducer = (state = initialState, action) => {
    switch (action.type) {
        case "APPEND_NUMBER":
            return {
                current: state.current + action.payload,
            };
        default:
            return state
    }
}

export default formulaReducer;