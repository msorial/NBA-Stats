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
            <tr>
              {this.props.playerOneAst && this.props.playerTwoAst && (
                <th>
                  <p>Assists</p>
                </th>
              )}
              {this.props.playerOneAst && <td>{this.props.playerOneAst}</td>}
              {this.props.playerTwoAst && <td>{this.props.playerTwoAst}</td>}
            </tr>
            <tr>
              {this.props.playerOneReb && this.props.playerTwoReb && (
                <th>
                  <p>Rebounds</p>
                </th>
              )}
              {this.props.playerOneReb && <td>{this.props.playerOneReb}</td>}
              {this.props.playerTwoReb && <td>{this.props.playerTwoReb}</td>}
            </tr>
            <tr>
              {this.props.playerOneStl && this.props.playerTwoStl && (
                <th>
                  <p>Steals</p>
                </th>
              )}
              {this.props.playerOneStl && <td>{this.props.playerOneStl}</td>}
              {this.props.playerTwoStl && <td>{this.props.playerTwoStl}</td>}
            </tr>
            <tr>
              {this.props.playerOneBlk && this.props.playerTwoBlk && (
                <th>
                  <p>Blocks</p>
                </th>
              )}
              {this.props.playerOneBlk && <td>{this.props.playerOneBlk}</td>}
              {this.props.playerTwoBlk && <td>{this.props.playerTwoBlk}</td>}
            </tr>
            <tr>
              {this.props.playerOneFGP && this.props.playerTwoFGP && (
                <th>
                  <p>FG%</p>
                </th>
              )}
              {this.props.playerOneFGP && <td>{(this.props.playerOneFGP * 100).toFixed(1)}</td>}
              {this.props.playerTwoFGP && <td>{(this.props.playerTwoFGP * 100).toFixed(1)}</td>}
            </tr>
            <tr>
              {this.props.playerOneFG3P && this.props.playerTwoFG3P && (
                <th>
                  <p>3P%</p>
                </th>
              )}
              {this.props.playerOneFG3P && <td>{(this.props.playerOneFG3P * 100).toFixed(1)}</td>}
              {this.props.playerTwoFG3P && <td>{(this.props.playerTwoFG3P * 100).toFixed(1)}</td>}
            </tr>
            <tr>
              {this.props.playerOneFTP && this.props.playerTwoFTP && (
                <th>
                  <p>FT%</p>
                </th>
              )}
              {this.props.playerOneFTP && <td>{(this.props.playerOneFTP * 100).toFixed(1)}</td>}
              {this.props.playerTwoFTP && <td>{(this.props.playerTwoFTP * 100).toFixed(1)}</td>}
            </tr>
            <tr>
              {this.props.playerOneTO && this.props.playerTwoTO && (
                <th>
                  <p>Turnovers</p>
                </th>
              )}
              {this.props.playerOneTO && <td>{this.props.playerOneTO}</td>}
              {this.props.playerTwoTO && <td>{this.props.playerTwoTO}</td>}
            </tr>
            <tr>
              {this.props.playerOneMin && this.props.playerTwoMin && (
                <th>
                  <p>Minutes</p>
                </th>
              )}
              {this.props.playerOneMin && <td>{this.props.playerOneMin}</td>}
              {this.props.playerTwoMin && <td>{this.props.playerTwoMin}</td>}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default StatsTable;
