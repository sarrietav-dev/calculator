const initialState = {
    content: "",
    isInLimit: false
};

const currentContentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "APPEND_NUMBER":
            if (state.content.length === 10) {
                return {
                    ...state,
                    isInLimit: true
                }
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
        default:
            return state;
    }
}

export default currentContentReducer;