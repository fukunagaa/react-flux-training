import React from "react";
import className from "classnames";

import Todos from "./Todos";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Todos />
      </div>
    );
  }
}

export default Home;
