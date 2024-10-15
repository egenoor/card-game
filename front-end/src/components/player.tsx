import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppSelector } from "../store/hooks";
import "./player.css";

function Player() {
  const playerInfo = useAppSelector((state) => state.game.playerInfo);

  console.log(playerInfo);
  const generateLives = () => {
    return Array.from({ length: playerInfo.lives }, () => (
      <FavoriteIcon fontSize="large" sx={{ color: "#FF0000" }} />
    ));
  };

  return (
    <div className="player-info">
      <span className="name">{playerInfo.name ?? ""}</span>
      {generateLives()}
    </div>
  );
}

export default Player;
