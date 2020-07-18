import { CREATE_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionTypes";
import axios from "axios";
import dispatcher from "./dispatcher";

export default {
  createTodo: function (text) {
    axios
      .get("/ajax" , { params : { name:"ken", age:11 }})
      .then((res) => {
        console.log("got the data! : ", res.data.foo);
      })
      .catch(() => {
        console.log("通信に失敗しました。");
      });
    let params = new URLSearchParams();
    params.append("name", "taro");
    params.append("age", 17);
    axios
      .post("/ajax", params)
      .then((res) => {
        console.log("got the data! : ", res);
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
