const initialState = {
    content: "",
    isInLimit: false,
    previous: 0
};

const currentContentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "APPEND_NUMBER":
            if (state.content.length === 10) {
                return state
            }
            return {
                ...state,
                content: state.content + action.payload,
                isInLimit: false
            };
        case "CLEAR":
            return {
                previous: 0,
                content: "",
                isInLimit: false
            }
        case "ADD":
            return {
                previous: state.previous + parseFloat(state.content),
                content: "",
                isInLimit: false
            }
        // TODO: Make this show the same value everytime its click.
        case "EQUALS":
            const result = state.previous + parseFloat(state.content);
            return {
                previous: result,
                content: result,
                isInLimit: false
            }
        default:
            return state;
    }
}

export default currentContentReducer;