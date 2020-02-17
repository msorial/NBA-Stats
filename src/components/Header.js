import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className="headerMessage">
          Compare your <span className="headerMessage-gradiant"> Favorite</span>{" "}
          <span className="headerMessage-gray">Players</span>{" "}
        </h1>
        <h2 className="headerMessage-last">from different generations</h2>
        <p className="siteDescription">NBA Player Comparison Tool</p>
      </div>
    );
  }
}

export default Header;
