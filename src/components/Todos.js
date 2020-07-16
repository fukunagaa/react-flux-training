import React from "react";
import className from "classnames";

import Todo from "./Todo";
import store from "../redux/store";

class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: store.getAll(),
      text: "",
    };
  }

  // componentDidMount => マウントされた時に処理が走る
  componentDidMount = () => {
    store.on("change", () => {
      this.setState({
        todos: store.getAll(),
        text: "",
      });
    });
  };

  changeText = () => {
    this.setState({ text: document.getElementById("text-value").value});
  }

  updateTodo = () => {
    store.createTodo(this.state.text);
  }

  render() {
    console.log("Todos render");
    const todos = this.state.todos;
    const todoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo} />;
    });
    return (
      <div>
        <h1>Todos</h1>
        <input type="text" value={this.state.text} id={"text-value"} onChange={this.changeText}/>
        <input type="button" onClick={this.updateTodo} value="button" />
        <ul>{todoComponents}</ul>
      </div>
    );
  }
}

export default Todos;
