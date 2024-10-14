import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Player from "../components/player";
import Game from "./game";

export interface NewGameResponse {
  baseCard: ICard;
  player: IPlayer;
}

export interface IPlayer {
  name: string;
  lives: number;
  score: number;
}

export interface ICard {
  suit: string;
  rank: string;
  value: number;
}

function Home() {
  const [name, setName] = useState("");
  const [startGame, setStartGame] = useState<boolean>(false);
  const [baseCard, setBaseCard] = useState<ICard | null>(null);
  const [player, setPlayer] = useState<IPlayer | null>(null);

  const startRound = async (name: string) => {
    const { data: newGameResponse } = await axios.get(
      `http://localhost:8080/new-game?name=${name}`
    );
    setBaseCard(newGameResponse.baseCard);
    setPlayer(newGameResponse.player);
    setStartGame(true);
  };

  return (
    <div>
      {startGame ? (
        <>
          <Player name={player?.name} lives={player?.lives ?? 0} />
          <Game baseCard={baseCard} />
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
                setName(e.currentTarget.value);
              }}
            />
            <Button
              onClick={() => {
                startRound(name);
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
