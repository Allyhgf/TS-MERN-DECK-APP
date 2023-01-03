import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");

  const handleCreateDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:5000/decks", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleCreateDeck} method="POST">
        <label htmlFor="deck-title">Deck Title</label>
        <input
          id="deck-title"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <button>Create Deck</button>
      </form>
    </div>
  );
}

export default App;
