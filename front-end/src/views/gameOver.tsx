import { Box, Button, Container, Typography } from "@mui/material";

function GameOver() {
  return (
    <Container>
      <Box>
        <Typography sx={{ fontSize: "32px" }}>Game over</Typography>
        <Typography sx={{ fontSize: "24px", marginBottom: "50px" }}>
          Play again
        </Typography>
        <Button
          sx={{ marginRight: "20px" }}
          variant="contained"
          onClick={() => {}}
        >
          Yes
        </Button>
        <Button variant="outlined" onClick={() => {}}>
          No
        </Button>
      </Box>
    </Container>
  );
}

export default GameOver;
