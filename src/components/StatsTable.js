import React from "react";

class StatsTable extends React.Component {
  render() {
    return (
      <div>
        {this.props.playerOnePts && <p>Player One Average Points: {this.props.playerOnePts} </p>}
        {this.props.playerTwoPts && <p>Player Two Average Points: {this.props.playerTwoPts} </p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

export default StatsTable;
