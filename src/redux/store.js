import { EventEmitter } from "events";

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

  getAll() {
    return this.todos;
  }
}

const store = new Store();

export default store;
