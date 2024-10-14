import {
  Button,
  Card,
  CardContent,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import axios from "axios";
import "./game.css";
import { ICard } from "./home";

interface GameProps {
  baseCard: ICard | null;
}

function Game({ baseCard }: GameProps) {
  const compareCards = async (value: string) => {
    const { data: newRoundResponse } = await axios.get(
      `http://localhost:8080/compare-cards?playerChoice=${value}`
    );
    console.log(newRoundResponse);
  };

  return (
    <Container className="game">
      <Grid2 size={6}>
        <Card sx={{ maxWidth: 275, minHeight: 400 }}>
          <CardContent>
            <Grid2 container rowSpacing={12} columnSpacing={{ md: 4 }}>
              <Grid2 size={6}>
                <Typography>{baseCard?.rank}</Typography>
                <Typography>{baseCard?.suit}</Typography>
              </Grid2>
              <Grid2 size={6}>
                <Typography>{baseCard?.rank}</Typography>
                <Typography>{baseCard?.suit}</Typography>
              </Grid2>
              <Grid2 size={6}>
                <Typography>{baseCard?.rank}</Typography>
                <Typography>{baseCard?.suit}</Typography>
              </Grid2>
              <Grid2 size={6}>
                <Typography>{baseCard?.rank}</Typography>
                <Typography>{baseCard?.suit}</Typography>
              </Grid2>
            </Grid2>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 container>
        <Grid2 size={12}>
          <Button
            value="higher"
            onClick={(e) => {
              compareCards(e.currentTarget.value);
            }}
            variant="contained"
          >
            Higher
          </Button>
        </Grid2>
        <Grid2 size={12}>
          <Button
            value="equal"
            onClick={(e) => {
              compareCards(e.currentTarget.value);
            }}
            variant="contained"
          >
            Equal
          </Button>
        </Grid2>
        <Grid2 size={12}>
          <Button
            value="lower"
            onClick={(e) => {
              compareCards(e.currentTarget.value);
            }}
            variant="contained"
          >
            Lower
          </Button>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default Game;
