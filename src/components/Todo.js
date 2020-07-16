import React from "react";
import className from "classnames";

import actions from "../redux/actions";

class Todo extends React.Component {
  toggleTodo = () => {
    const id = this.props.id;
    const complete = !this.props.complete;
    actions.toggleTodo(id, complete);
  };
  render() {
    const todo = this.props;
    console.log(todo);
    const todoClass = todo.complete ? "completed" : "";
    return (
      <li className={todoClass} onClick={this.toggleTodo}>
        {todo.complete ? "👄" : "👅"}
        {todo.text}
      </li>
    );
  }
}

export default Todo;
