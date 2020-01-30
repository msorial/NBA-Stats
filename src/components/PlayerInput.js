import React from "react";

function PlayerInput() {
  return (
    <form className="playerInput">
      <input type="text" placeholder="Player #1 Name" name="nameOne" />
      <br></br>
      <input type="text" placeholder="Player #2 Name" name="nameTwo" />
      <br></br>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default PlayerInput;
