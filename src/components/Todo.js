import React from "react";
import className from "classnames";

import actions from "../redux/actions";

class Todo extends React.Component {
  toggleTodo = () => {
    const id = this.props.id;
    const complete = !this.props.complete;
    actions.toggleTodo(id, complete);
  };
  deleteTodo = () => {
    const id = this.props.id;
    actions.deleteTodo(id);
  };
  render() {
    const todo = this.props;
    console.log(todo);
    const todoClass = todo.complete ? "completed" : "";
    return (
      <div className={"rows"}>
        <div>
          <li className={"todo-list-area"} onClick={this.toggleTodo}>
            <div className={"todo-center todo-list " + todoClass}>
              {todo.complete ? "👄" : "👅"}
              {todo.text}
            </div>
          </li>
        </div>
        <div className={"todo-list-button-area"}>
          <button
            className={"todo-list-button"}
            onClick={this.deleteTodo}
          >
            <i>&#x1f5d1; Delete</i>
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
