import React from "react";
import "./App.css";

import WelcomeMessage from "./components/WelcomeMessage";
import PlayerInput from "./components/PlayerInput";
import StatsTable from "./components/StatsTable";

class App extends React.Component {
  state = {
    playerOnePts: undefined,
    PlayerOneAst: undefined,
    PlayerOneReb: undefined,
    playerTwoPts: undefined,
    PlayerTwoAst: undefined,
    PlayerTwoReb: undefined,
    error: undefined
  };

  getPlayerStats = async e => {
    e.preventDefault();
    const playerOneName = e.target.elements.playerOneName.value;
    const playerOneSeason = e.target.elements.playerOneSeason.value;
    const playerTwoName = e.target.elements.playerTwoName.value;
    const playerTwoSeason = e.target.elements.playerTwoSeason.value;

    if (playerOneName && playerOneSeason && playerTwoName && playerTwoSeason) {
      // Fetches Player #1 Information
      const playerOneSearchAPI = await fetch(`https://www.balldontlie.io/api/v1/players/?search=${playerOneName}`);
      const playerOneProfileData = await playerOneSearchAPI.json();
      // Fetches Player #1 Averages based on playerID from playerOneProfileData + Season entered by User
      const playerOneID = playerOneProfileData.data[0].id;
      const playerOneAverageAPI = await fetch(
        `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerOneID}&season=${playerOneSeason}`
      );
      const playerOneAverageData = await playerOneAverageAPI.json();
      // console.log(playerOneProfileData);
      // console.log(playerOneAverageData);

      // Fetches Player #2 Information
      const playerTwoSearchAPI = await fetch(`https://www.balldontlie.io/api/v1/players/?search=${playerTwoName}`);
      const playerTwoProfileData = await playerTwoSearchAPI.json();
      // Fetches Player #2 Averages based on playerID from playerTwoProfileData + Season entered by User
      const playerTwoID = playerTwoProfileData.data[0].id;
      const playerTwoAverageAPI = await fetch(
        `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerTwoID}&season=${playerTwoSeason}`
      );
      const playerTwoAverageData = await playerTwoAverageAPI.json();
      // console.log(playerTwoProfileData);
      // console.log(playerTwoAverageData);

      this.setState({
        playerOnePts: playerOneAverageData.data[0].pts,
        playerOneAst: playerOneAverageData.data[0].ast,
        playerOneReb: playerOneAverageData.data[0].reb,
        playerTwoPts: playerTwoAverageData.data[0].pts,
        playerTwoAst: playerTwoAverageData.data[0].ast,
        playerTwoReb: playerTwoAverageData.data[0].reb,
        error: ""
      });
    } else {
      this.setState({
        playerOnePts: undefined,
        playerOneAst: undefined,
        playerOneReb: undefined,
        playerTwoPts: undefined,
        playerTwoAst: undefined,
        playerTwoReb: undefined,
        error: "Please fill out!"
      });
    }
  };

  render() {
    return (
      <div>
        <WelcomeMessage />
        <PlayerInput getPlayerStats={this.getPlayerStats} />
        <StatsTable
          playerOnePts={this.state.playerOnePts}
          playerOneAst={this.state.playerOneAst}
          playerOneReb={this.state.playerOneReb}
          playerTwoPts={this.state.playerTwoPts}
          playerTwoAst={this.state.playerTwoAst}
          playerTwoReb={this.state.playerTwoReb}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
