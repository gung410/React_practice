import { ADD_TODO } from "../actions/action";

const initialState = { todos:[] };

function rootReducer(state = initialState , action) {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state ,
                todos: [...state.todos, { text : action.text}]
            }
        default:
            return state;
    }
}

export default rootReducer;