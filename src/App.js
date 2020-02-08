import React from "react";
import "./App.css";

import PlayerInput from "./components/PlayerInput";

class App extends React.Component {
  state = {
    pts: undefined,
    ast: undefined,
    reb: undefined
  };

  getPlayerStats = async e => {
    e.preventDefault();
    const playerOneName = e.target.elements.playerOneName.value;
    const playerOneSeason = e.target.elements.playerOneSeason.value;
    const playerTwoName = e.target.elements.playerTwoName.value;
    const playerTwoSeason = e.target.elements.playerTwoSeason.value;

    // Fetches Player #1 Information
    const playerOneSearchAPI = await fetch(`https://www.balldontlie.io/api/v1/players/?search=${playerOneName}`);
    const playerOneProfileData = await playerOneSearchAPI.json();
    // console.log playerOneProfileData: 
    console.log(playerOneProfileData);
    // Fetches Player #1 Averages based on playerID from playerOneProfileData + Season entered by User
    const playerOneID = playerOneProfileData.data[0].id;
    const playerOneAverageAPI = await fetch(
      `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerOneID}&season=${playerOneSeason}`
    );
    const playerOneAverageData = await playerOneAverageAPI.json();
    // console.log playerOneAverageData: 
    console.log(playerOneAverageData);

    // Fetches Player #2 Information
    const playerTwoSearchAPI = await fetch(`https://www.balldontlie.io/api/v1/players/?search=${playerTwoName}`);
    const playerTwoProfileData = await playerTwoSearchAPI.json();
    // console.log playerTwoProfileData: 
    console.log(playerTwoProfileData);
    // Fetches Player #2 Averages based on playerID from playerTwoProfileData + Season entered by User
    const playerTwoID = playerTwoProfileData.data[0].id;
    const playerTwoAverageAPI = await fetch(
      `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerTwoID}&season=${playerTwoSeason}`
    );
    const playerTwoAverageData = await playerTwoAverageAPI.json();
    // console.log playerTwoAverageData: 
    console.log(playerTwoAverageData);
  };

  render() {
    return (
      <div>
        <PlayerInput getPlayerStats={this.getPlayerStats} />
      </div>
    );
  }
}

export default App;
