import { useState } from "react";

function Home() {
  const [name, setName] = useState("");
  const startRound = (name: string) => {
    fetch(`https://localhost:8080/new-game?name=${name}`);
  };
  return (
    <div>
      <div>Welcome to Hi-Lo card game</div>
      <div>Enter name to start playing</div>
      <div>
        <input
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
        />
        <button
          onClick={() => {
            startRound(name);
          }}
          type="button"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Home;
