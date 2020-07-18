import React from "react";
import { Link } from "react-router-dom";
import className from "classnames";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapse: true,
    };
  }

  toggleCollapse = () => {
    const collapse = !this.state.collapse;
    this.setState({ collapse });
  };

  render() {
    const location = this.props.location;
    const homeClass = location.pathname === "/" ? "active" : "";
    const favoritesClass = location.pathname.match(/^\/favorites/)
      ? "active"
      : "";
    const settingsClass = location.pathname.match(/^\/settings/)
      ? "active"
      : "";
    const collapseClass = this.state.collapse ? "collapse" : "";
    return (
      <nav
        className={"navbar navbar-inverse navbar-fixed-top"}
        role="navigation"
      >
        <div className={"container"}>
          <div className={"navbar-header"}>
            <button
              type="button"
              className={"navbar-toggle"}
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className={"sr-only"}>Toggle navigation</span>
              <span className={"icon-bar"}></span>
              <span className={"icon-bar"}></span>
              <span className={"icon-bar"}></span>
            </button>
          </div>
          <div
            className={"navbar-collapse" + collapseClass}
            id="bs-example-navbar-collapse-1"
          >
            <ul className={"nav navbar-nav"}>
              <li className={homeClass}>
                <Link to="/" onClick={this.toggleCollapse}>
                  home
                </Link>
              </li>
              <li className={favoritesClass}>
                <Link
                  to="/favorites/link"
                  onClick={this.toggleCollapse}
                >
                  favorites
                </Link>
              </li>
              <li className={settingsClass}>
                <Link to="/settings/main" onClick={this.toggleCollapse}>
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
