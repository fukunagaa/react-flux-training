import { EventEmitter } from "events";

import { CREATE_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionTypes";
import dispatcher from "./dispatcher";

class Store extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 113464613,
        text: "Go Shopping",
        complete: false,
      },
      {
        id: 235684679,
        text: "Pay Bills",
        complete: false,
      },
      {
        id: 113565683,
        text: "Go To Home",
        complete: false,
      },
      {
        id: 645564686,
        text: "Pay Car",
        complete: true,
      },
    ];
  }

  createTodo(text) {
    const id = Date.now();
    this.todos.push({
      id,
      text,
      complete: false,
    });
    // 子から親に対してカスタムイベント作成
    this.emit("change");
  }

  deleteTodo(id) {
    let count = 0;
    let index = 0;
    this.todos.forEach((todo) => {
      if (todo.id == id) {
        index = count;
        return true;
      }
      count++;
    })
    console.log("削除～");
    this.todos.splice(index,1);
    // 子から親に対してカスタムイベント作成
    this.emit("change");
  }

  toggleTodo(id, complete) {
    let count = 0;
    let index = 0;
    this.todos.forEach((todo) => {
      if (todo.id == id) {
        index = count;
        return true;
      }
      count++;
    });
    this.todos[index].complete = complete;
    // 子から親に対してカスタムイベント作成
    this.emit("change");
  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    switch (action.type) {
      case CREATE_TODO:
        this.createTodo(action.text);
        break;
      case DELETE_TODO:
        console.log("aa");
        this.deleteTodo(action.id);
        break;
      case TOGGLE_TODO:
        this.toggleTodo(action.id, action.complete);
        break;
      default:
        break;
    }
  }
}

const store = new Store();
dispatcher.register(store.handleActions.bind(store));

export default store;
