import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Player from "../components/player";
import { useAppDispatch } from "../store/hooks";
import { createNewGame } from "../store/slices/gameSlice";
import Game from "./game";

function Home() {
  const dispatch = useAppDispatch();
  const [playerName, setPlayerName] = useState("");
  const [startGame, setStartGame] = useState<boolean>(false);

  const startRound = async (playerName: string) => {
    await dispatch(createNewGame(playerName));
    setStartGame(true);
  };

  return (
    <div>
      <h1>Hi-Lo card game</h1>
      {startGame ? (
        <>
          <Player />
          <Game />
        </>
      ) : (
        <div className="welcome-page">
          <div>Welcome to Hi-Lo card game</div>
          <div>Enter name to start playing</div>
          <div>
            <TextField
              id="outlined-basic"
              label="Player name"
              variant="outlined"
              onChange={(e) => {
                setPlayerName(e.currentTarget.value);
              }}
            />
            <Button
              disabled={playerName === ""}
              onClick={() => {
                startRound(playerName);
              }}
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
