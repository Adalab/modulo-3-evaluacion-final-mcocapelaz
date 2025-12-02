import "../styles/App.scss";
import { useState, useEffect } from "react";


function App() {
  // Variables de estado

  const [characters, setCharacters] = useState([]);
  const [searchCharacters, setSearchCharacters] = useState("");
  const [searchHouses, setSearchHouses] = useState("gryffindor");
  const [loading, setLoading] = useState(true);

  // useEffect

  useEffect(() => {
    setLoading(true);  
    let urlHouses;
    if (searchHouses === "todas") {
      urlHouses = "https://hp-api.onrender.com/api/characters/"
    } else {
      urlHouses = `https://hp-api.onrender.com/api/characters/house/${searchHouses}`
    }
    fetch(urlHouses)
      .then((response) => response.json())
      .then((characters) => {
        setCharacters(characters);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);  
      });
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

  // Renderizado condicional

  if (loading) {
    return <p>Cargando personajes...</p>;
  }

  if (filteredCharacters.length === 0 && searchCharacters !== "") {
    return (
      <p>
        No hay ningún personaje que coincida con la palabra {searchCharacters}
      </p>
    );
  }

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
        {filteredCharacters.map((character) => (
          <div className="character-card" key={character.id}> 
            <img src={character.image} alt={character.name} />
            <div className="character-info">
              <h3>{character.name}</h3>
              <p>{character.house}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


