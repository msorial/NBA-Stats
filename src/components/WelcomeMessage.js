import React from "react";

class WelcomeMessage extends React.Component {
  render() {
    return (
      <div>
        <h1 className="headerMessage">
          <span className="headerMessage-first">Compare</span> your{" "}
          <span className="headerMessage-gradiant">Favorite</span> Players
        </h1>
        <p className="siteDescription">NBA Player Comparison Tool</p>
      </div>
    );
  }
}

export default WelcomeMessage;
