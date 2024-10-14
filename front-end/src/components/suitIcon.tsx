interface SuitIconProps {
  suit: string;
}

function SuitIcon({ suit }: SuitIconProps) {
  const suits = {
    SPADES: "Spades",
    CLUBS: "Clubs",
    HEARTS: "Hearts",
    DIAMONDS: "Diamonds",
  };

  const arrayOfSuits = Array.from(Object.entries(suits)).map(
    ([key, value]) => ({ [key]: value })
  );
  console.log(arrayOfSuits);
  return <div>{suit}</div>;
}

export default SuitIcon;
