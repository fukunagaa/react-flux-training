import { CREATE_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionTypes";
import axios from "axios";
import dispatcher from "./dispatcher";

export default {
  createTodo: function (text) {
    axios
      .get("https://api.github.com/users/fukunagaa")
      .then((data) => {
        console.log("got the data!", data);
      })
      .catch(() => {
        console.log("通信に失敗しました。");
      });
    dispatcher.dispatch({
      type: CREATE_TODO,
      text,
    });
  },
  deleteTodo: function (id) {
    dispatcher.dispatch({
      type: DELETE_TODO,
      id,
    });
  },
  toggleTodo: function (id, complete) {
    dispatcher.dispatch({
      type: TOGGLE_TODO,
      id,
      complete,
    });
  },
};
