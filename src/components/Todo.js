import React from "react";
import className from "classnames";

class Todo extends React.Component {
  render() {
      const todo = this.props;
      console.log(todo);
    return (
        <li>{todo.text}</li>
    );
  }
}

export default Todo;
