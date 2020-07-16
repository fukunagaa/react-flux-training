import { CREATE_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionTypes";
import dispatcher from "./dispatcher";

export default {
    createTodo: function(text) {
        dispatcher.dispatch({
            type: CREATE_TODO,
            text
        })
    },
    deleteTodo: function(id) {
        dispatcher.dispatch({
            type: DELETE_TODO,
            id
        })
    },
    toggleTodo: function(id, complete) {
        dispatcher.dispatch({
            type: TOGGLE_TODO,
            id,
            complete
        })
    }
}