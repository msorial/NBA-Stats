import React from "react";
import "./App.css";

import Header from "./components/Header";
import PlayerInput from "./components/PlayerInput";
import StatsTable from "./components/StatsTable";

class App extends React.Component {
  state = {
    playerOneFirstName: undefined,
    playerOneLastName: undefined,
    playerOnePts: undefined,
    playerOneAst: undefined,
    playerOneReb: undefined,
    playerOneStl: undefined,
    playerOneBlk: undefined,
    playerOneFGP: undefined,
    playerOneFG3P: undefined,
    playerOneFTP: undefined,
    playerOneTO: undefined,
    playerOneMin: undefined,
    playerTwoFirstName: undefined,
    playerTwoLastName: undefined,
    playerTwoPts: undefined,
    playerTwoAst: undefined,
    playerTwoReb: undefined,
    playerTwoStl: undefined,
    playerTwoBlk: undefined,
    playerTwoFGP: undefined,
    playerTwoFG3P: undefined,
    playerTwoFTP: undefined,
    playerTwoTO: undefined,
    playerTwoMin: undefined,
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
        // Player One Data
        playerOneFirstName: playerOneProfileData.data[0].first_name,
        playerOneLastName: playerOneProfileData.data[0].last_name,
        playerOnePts: playerOneAverageData.data[0].pts,
        playerOneAst: playerOneAverageData.data[0].ast,
        playerOneReb: playerOneAverageData.data[0].reb,
        playerOneStl: playerOneAverageData.data[0].stl,
        playerOneBlk: playerOneAverageData.data[0].blk,
        playerOneFGP: playerOneAverageData.data[0].fg_pct,
        playerOneFG3P: playerOneAverageData.data[0].fg3_pct,
        playerOneFTP: playerOneAverageData.data[0].ft_pct,
        playerOneTO: playerOneAverageData.data[0].turnover,
        playerOneMin: playerOneAverageData.data[0].min,
        // Player Two Data
        playerTwoFirstName: playerTwoProfileData.data[0].first_name,
        playerTwoLastName: playerTwoProfileData.data[0].last_name,
        playerTwoPts: playerTwoAverageData.data[0].pts,
        playerTwoAst: playerTwoAverageData.data[0].ast,
        playerTwoReb: playerTwoAverageData.data[0].reb,
        playerTwoStl: playerTwoAverageData.data[0].stl,
        playerTwoBlk: playerTwoAverageData.data[0].blk,
        playerTwoFGP: playerTwoAverageData.data[0].fg_pct,
        playerTwoFG3P: playerTwoAverageData.data[0].fg3_pct,
        playerTwoFTP: playerTwoAverageData.data[0].ft_pct,
        playerTwoTO: playerTwoAverageData.data[0].turnover,
        playerTwoMin: playerTwoAverageData.data[0].min,
        error: ""
      });
    } else {
      this.setState({
        playerOneFirstName: undefined,
        playerOneLastName: undefined,
        playerOnePts: undefined,
        playerOneAst: undefined,
        playerOneReb: undefined,
        playerOneStl: undefined,
        playerOneBlk: undefined,
        playerOneFGP: undefined,
        playerOneFG3P: undefined,
        playerOneFTP: undefined,
        playerOneTO: undefined,
        playerOneMin: undefined,
        playerTwoFirstName: undefined,
        playerTwoLastName: undefined,
        playerTwoPts: undefined,
        playerTwoAst: undefined,
        playerTwoReb: undefined,
        playerTwoStl: undefined,
        playerTwoBlk: undefined,
        playerTwoFGP: undefined,
        playerTwoFG3P: undefined,
        playerTwoFTP: undefined,
        playerTwoTO: undefined,
        playerTwoMin: undefined,
        error: "Please fill out!"
      });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <PlayerInput getPlayerStats={this.getPlayerStats} />
        <StatsTable
          playerOneFirstName={this.state.playerOneFirstName}
          playerOneLastName={this.state.playerOneLastName}
          playerOnePts={this.state.playerOnePts}
          playerOneAst={this.state.playerOneAst}
          playerOneReb={this.state.playerOneReb}
          playerOneStl={this.state.playerOneStl}
          playerOneBlk={this.state.playerOneBlk}
          playerOneFGP={this.state.playerOneFGP}
          playerOneFG3P={this.state.playerOneFG3P}
          playerOneFTP={this.state.playerOneFTP}
          playerOneTO={this.state.playerOneTO}
          playerOneMin={this.state.playerOneMin}
          playerTwoFirstName={this.state.playerTwoFirstName}
          playerTwoLastName={this.state.playerTwoLastName}
          playerTwoPts={this.state.playerTwoPts}
          playerTwoAst={this.state.playerTwoAst}
          playerTwoReb={this.state.playerTwoReb}
          playerTwoStl={this.state.playerTwoStl}
          playerTwoBlk={this.state.playerTwoBlk}
          playerTwoFGP={this.state.playerTwoFGP}
          playerTwoFG3P={this.state.playerTwoFG3P}
          playerTwoFTP={this.state.playerTwoFTP}
          playerTwoTO={this.state.playerTwoTO}
          playerTwoMin={this.state.playerTwoMin}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
