import React from "react";

const PlayerInput = props => {
  return (
    <form onSubmit={props.getPlayerStats} className="playerInput">
      <input type="text" placeholder="Player #1 Name" name="playerOneName"/>
      <input type="number" placeholder="Season Year" name="playerOneSeason"/>
      <br></br>
      <input type="text" placeholder="Player #2 Name" name="playerTwoName" />
      <input type="number" placeholder="Season Year" name="playerTwoSeason"/>
      <br></br>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default PlayerInput;
