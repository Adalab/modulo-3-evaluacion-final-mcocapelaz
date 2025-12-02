import "../styles/App.scss";
import { useState, useEffect } from "react";

function App() {
  // Variables de estado

  const [characters, setCharacters] = useState([]);
  const [searchCharacters, setSearchCharacters] = useState("");
  const [searchHouse, setSearchHouse] = useState("gryffindor");
  const [loading, setLoading] = useState(true);

  // useEffect

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters/house/gryffindor")
      .then((response) => response.json())
      .then((characters) => {
        setCharacters(characters);
        setLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  

  return (
    <div className="container">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Harry_Potter_wordmark.svg"
          alt="Harry Potter"
        />
      </div>

      <div className="search-section">
        <form>
          <label>Busca por personaje:</label>
          <input
            type="text"
            value={searchCharacters}
            onChange={handleSearch}
            placeholder="Nombre del personaje"
          />
        </form>
      </div>

      <div className="search-section">
        <form>
          <label>Selecciona la casa:</label>
          <select value={"gryffindor"} onChange={handleSearch}>
            <option value="gryffindor">Gryffindor</option>
            <option value="slytherin">Slytherin</option>
            <option value="hufflepuff">Hufflepuff</option>
            <option value="ravenclaw">Ravenclaw</option>
          </select>
        </form>
      </div>

 <div className="characters-grid">
        <ul>
          {filteredCharacters.map((character) => (
            <li key={character.id}>
              {character.name} {character.house}
              <img src={character.image} alt={character.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;