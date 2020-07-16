import React from "react";

class Settings extends React.Component {
  render() {
    console.log(this.props);
    const type = (this.props.match.params.mode == "extra"? " (for experts)": "");
    return (
      <div>
      <h1>Settings{type}</h1>
      <h3>dataset</h3>
      </div>
    );
  }
}

export default Settings;