import { Box, Button, Card, Container, Grid2, Typography } from "@mui/material";
import SuitIcon from "../components/suitIcon";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { newRound } from "../store/slices/gameSlice";
import "./game.css";

function Game() {
  const dispatch = useAppDispatch();
  const { rank, suit } = useAppSelector((state) => state.game.baseCard);
  const compareCards = async (playerChoice: string) => {
    await dispatch(newRound(playerChoice));
  };

  return (
    <Container className="game">
      <Grid2 size={6}>
        <Card sx={{ maxWidth: 200, minHeight: 280, padding: 2 }}>
          <Grid2 container rowSpacing={12} columnSpacing={{ md: 6 }}>
            <Grid2 size={6}>
              <Typography>{rank}</Typography>
              <SuitIcon suit={suit} />
            </Grid2>
            <Grid2 size={6}>
              <Typography>{rank}</Typography>
              <SuitIcon suit={suit} />
            </Grid2>
            <Grid2 size={6}>
              <Typography>{rank}</Typography>
              <SuitIcon suit={suit} />
            </Grid2>
            <Grid2 size={6}>
              <Typography>{rank}</Typography>
              <SuitIcon suit={suit} />
            </Grid2>
          </Grid2>
        </Card>
      </Grid2>
      <Grid2 container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 5,
          }}
        >
          <Button
            value="higher"
            onClick={(e) => {
              compareCards(e.currentTarget.value);
            }}
            variant="contained"
          >
            Higher
          </Button>
          <Button
            value="equal"
            onClick={(e) => {
              compareCards(e.currentTarget.value);
            }}
            variant="contained"
          >
            Equal
          </Button>
          <Button
            value="lower"
            onClick={(e) => {
              compareCards(e.currentTarget.value);
            }}
            variant="contained"
          >
            Lower
          </Button>
        </Box>
      </Grid2>
    </Container>
  );
}

export default Game;
