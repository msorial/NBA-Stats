import React from "react";

class PlayerInput extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getPlayerStats} className="playerInput">
        <input type="text" placeholder="Player Name" name="playerOneName" className="playerOneInputs" />
        <input type="number" placeholder="Season" name="playerOneSeason" className="playerOneInputs" />
        <br></br>
        <input type="text" placeholder="Player Name" name="playerTwoName" className="playerTwoInputs" />
        <input type="number" placeholder="Season" name="playerTwoSeason" className="playerTwoInputs" />
        <br></br>
        <input type="submit" value="Submit" className="submitButton" />
      </form>
    );
  }
}

export default PlayerInput;
