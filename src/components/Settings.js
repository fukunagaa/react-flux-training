import React from "react";

class Settings extends React.Component {
  render() {
    console.log(this.props);
    const type = (this.props.match.params.mode == "extra"? " (for experts)": "");
    return (
      <h1>Settings{type}</h1>
    );
  }
}

export default Settings;