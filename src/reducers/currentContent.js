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
                content: state.content + action.payload,
                isInLimit: false
            };
        case "CLEAR":
            return {
                content: "",
                isInLimit: false
            }
        case "ADD":
            return {
                previous: state.previous + parseFloat(state.content),
                content: "",
                isInLimit: false
            }
        default:
            return state;
    }
}

export default currentContentReducer;