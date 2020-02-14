import React from "react";

class WelcomeMessage extends React.Component {
  render() {
    return (
      <div>
        <h1 className="headerMessage">
          Compare your <span className="headerMessage-gradiant"> Favorite</span>{" "}
          <span className="headerMessage-last">Players</span>
        </h1>
        <p className="siteDescription">NBA Player Comparison Tool</p>
      </div>
    );
  }
}

export default WelcomeMessage;
