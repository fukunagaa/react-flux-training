import React from "react";
import className from "classnames";
import { Link } from "react-router-dom";

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      like: "",
      filter: "",
    };
  }
  likeChange = () => {
    const like = document.getElementById("like-text").value;
    this.setState({ like });
  };
  filterChange = () => {
    const filter = document.getElementById("filter-text").value;
    this.setState({ filter });
  };
  render() {
    console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    let message =
      (this.props.match.params.article
        ? this.props.match.params.article + ", "
        : "") +
      "like=" +
      (query.get("like") == null ? "nothing" : query.get("like")) +
      ", filter=" +
      (query.get("filter") == null ? "nothing" : query.get("filter"));
      const next = "/favorites/link?like=" + this.state.like + "&filter=" + this.state.filter;
    return (
      <div>
        <h1>Favorites</h1>
        <div>
          <input
            type="text"
            placeholder="like"
            id="like-text"
            value={this.state.like}
            onChange={this.likeChange}
            className={"todo-input width-172 todo-font"}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="filter"
            id="filter-text"
            value={this.state.filter}
            onChange={this.filterChange}
            className={"width-172 todo-font"}
          />
        </div>
        <Link
          to={next}
          className={"todo-button todo-font"}
        >
          検索
        </Link>
        <h3>{message}</h3>
      </div>
    );
  }
}

export default Favorites;
