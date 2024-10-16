import Clubs from "../assets/Clubs.svg";
import Diamonds from "../assets/Diamonds.svg";
import Hearts from "../assets/Hearts.svg";
import Spades from "../assets/Spades.svg";

interface SuitIconProps {
  suit: string;
}

function SuitIcon({ suit }: SuitIconProps) {
  const suits: Record<string, string> = {
    SPADES: Spades,
    CLUBS: Clubs,
    HEARTS: Hearts,
    DIAMONDS: Diamonds,
  };

  return <img src={suits[suit]} alt={suit} />;
}

export default SuitIcon;
