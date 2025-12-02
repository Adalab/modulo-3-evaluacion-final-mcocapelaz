import "../styles/App.scss";
import { useState, useEffect } from "react";

function App() {
  // Variables de estado

  const [characters, setCharacters] = useState([]);
  const [searchCharacters, setSearchCharacters] = useState("");
  const [searchHouses, setSearchHouses] = useState("gryffindor");
  const [loading, setLoading] = useState(true);

  // useEffect

  let urlHouses;
if (urlHouses === "todas") {
  urlHouses = "https://hp-api.onrender.com/api/characters/"
} else {
  urlHouses = `https://hp-api.onrender.com/api/characters/house/${searchHouses}`
}


  useEffect(() => {
    fetch(urlHouses)
      .then((response) => response.json())
      .then((characters) => {
        setCharacters(characters);
        setLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  }, [searchHouses]);

  //Variables derivadas

  const filteredCharacters = characters.filter((character) =>
    character.name
      .toLocaleLowerCase()
      .includes(searchCharacters.toLocaleLowerCase())
  );

  // Funciones manejadoras

  const handleSearch = (ev) => {
    setSearchCharacters(ev.target.value) 
  };

    const handleSearchHouses = (ev) => {
    setSearchHouses(ev.target.value) 
  };

  
    

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
            
          <select value={searchHouses} onChange={handleSearchHouses}>
            <option value="todas">Todas</option>
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