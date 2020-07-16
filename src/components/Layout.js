import React from "react";
import { Link, withRouter, NavLink } from "react-router-dom";
import className from "classnames";

import Nav from "./Nav";
import Footer from "./Footer";

class Layout extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <Nav location={location} />
        <h1>Welcome!</h1>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default withRouter(Layout);
