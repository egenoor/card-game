import {
  Box,
  Button,
  Container,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Player from "../components/player";
import Rules from "../components/rules";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { createNewGame } from "../store/slices/gameSlice";
import Game from "./game";

function Home() {
  const dispatch = useAppDispatch();
  const [playerName, setPlayerName] = useState("");
  const playerInfo = useAppSelector((state) => state.game.playerInfo);

  const startRound = async (playerName: string) => {
    await dispatch(createNewGame(playerName));
    setStartGame(true);
  };

  return (
    <Container>
      <h1>Hi-Lo card game</h1>
      {startGame ? (
        <Grid2 container rowSpacing={6} columnSpacing={{ md: 12 }}>
          <Rules />
          <Player />
          <Game />
        </Grid2>
      ) : (
        <Container className="welcome-page">
          <Typography>Welcome to Hi-Lo card game</Typography>
          <Typography>Enter name to start playing</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: 5,
            }}
          >
            <TextField
              id="outlined-basic"
              label="Player name"
              variant="outlined"
              onChange={(e) => {
                setPlayerName(e.currentTarget.value);
              }}
            />
            <Button
              sx={{ marginLeft: "20px" }}
              disabled={playerName === ""}
              onClick={() => {
                startRound(playerName);
              }}
              variant="contained"
            >
              Submit
            </Button>
          </Box>
        </Container>
      )}
    </Container>
  );
}

export default Home;
