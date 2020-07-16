import React from "react";
import className from "classnames";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className={"row"}>
          <div className={"col-lg-12"}>
            <p>Copyright &copy; Favorites,Todos</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
