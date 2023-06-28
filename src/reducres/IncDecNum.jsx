import { DECREMENT, INCREMENT } from "../constant";

const initialState = 0;

const IncDecNum = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1

        case DECREMENT:
            return state - 1

        default:
            return state
    }
}

export default IncDecNum