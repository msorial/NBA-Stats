import React from "react";

class StatsTable extends React.Component {
  render() {
    return (
      <div className="statOutput">
        {this.props.error && <p>{this.props.error}</p>}
        <br></br>
        <table className="compareTable">
          <thead>
            <tr>
              {this.props.playerOneFirstName && this.props.playerOneLastName && (
                <th>
                  <p></p>
                </th>
              )}
              {this.props.playerOneFirstName && this.props.playerOneLastName && (
                <th>
                  {this.props.playerOneFirstName} {this.props.playerOneLastName}
                </th>
              )}
              {this.props.playerTwoFirstName && this.props.playerTwoLastName && (
                <th>
                  {this.props.playerTwoFirstName} {this.props.playerTwoLastName}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            <tr>
              {this.props.playerOnePts && this.props.playerTwoPts && (
                <th>
                  <p>Points</p>
                </th>
              )}
              {this.props.playerOnePts && <td>{this.props.playerOnePts}</td>}
              {this.props.playerTwoPts && <td>{this.props.playerTwoPts}</td>}
            </tr>
            {/* <tr>
              <th>Assists</th>
            </tr>
            <tr>
              <th>Rebounds</th>
            </tr>
            <tr>
              <th>Steals</th>
            </tr>
            <tr>
              <th>Blocks</th>
            </tr>
            <tr>
              <th>FG%</th>
            </tr>
            <tr>
              <th>3P%</th>
            </tr>
            <tr>
              <th>FT%</th>
            </tr>
            <tr>
              <th>Turnovers</th>
            </tr>
            <tr>
              <th>Minutes</th>
            </tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StatsTable;
