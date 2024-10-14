import FavoriteIcon from "@mui/icons-material/Favorite";
import "./player.css";

interface PlayerProps {
  name?: string;
  lives: number;
}

function Player({ name, lives }: PlayerProps) {
  const generateLives = () => {
    return Array.from({ length: lives }, () => (
      <FavoriteIcon fontSize="large" sx={{ color: "#FF0000" }} />
    ));
  };

  return (
    <div className="player-info">
      <span className="name">{name ?? ""}</span>
      {generateLives()}
    </div>
  );
}

export default Player;
