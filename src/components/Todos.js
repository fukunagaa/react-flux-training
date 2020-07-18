import React from "react";
import className from "classnames";

import Todo from "./Todo";
import store from "../redux/store";
import actions from "../redux/actions";

class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: store.getAll(),
      text: "",
    };
  }

  getTodos = () => {
      this.setState({
        todos: store.getAll(),
        text: "",
      });
  }

  // componentDidMount => マウントされた時に処理が走る
  componentDidMount = () => {
    store.on("change", this.getTodos);
    // マウント時のメモリ上の登録されたListener数を数える
    console.log("count", store.listenerCount("change"));
  };

  // componentWillUnmount => コンポーネントがアンマウントされて破棄される直前処理が走る
  componentWillUnmount() {
    // メモリ上の登録されたListenerを削除する
    store.removeListener("change", this.getTodos);
  }

  changeText = () => {
    this.setState({ text: document.getElementById("text-value").value });
  };

  createTodo = () => {
    const text = this.state.text;
    actions.createTodo(text);
  };

  render() {
    console.log("Todos render");
    const todos = this.state.todos;
    const todoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo} />;
    });
    return (
      <div>
        <h1>Todos</h1>
        <input
          type="text"
          value={this.state.text}
          id={"text-value"}
          onChange={this.changeText}
          className={"todo-input width-377 todo-font"}
          placeholder={"todo write"}
        />
        <input type="button" onClick={this.createTodo} value="Todo 追加" className={"todo-button todo-font"} />
        <h4>Todo List</h4>
        <ul>{todoComponents}</ul>
      </div>
    );
  }
}

export default Todos;
