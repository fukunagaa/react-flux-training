import React from "react";
import className from "classnames";

class Favorites extends React.Component {
  render() {
    console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    let message =
      (this.props.match.params.article
        ? this.props.match.params.article + ", "
        : "") +
      "like=" +
      query.get("like") +
      ", filter=" +
      query.get("filter");
    return (
      <div>
        <h1>Favorites</h1>
        <h3>{message}</h3>
      </div>
    );
  }
}

export default Favorites;
