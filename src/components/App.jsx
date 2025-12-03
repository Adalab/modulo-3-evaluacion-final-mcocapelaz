import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import hogwartsCastle from "../images/hogwarts_castle.png";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterCard from "./CharacterCard";
import CharacterDetail from "./CharacterDetail";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchCharacters, setSearchCharacters] = useState("");
  const [searchHouses, setSearchHouses] = useState("gryffindor");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let urlHouses;
    if (searchHouses === "todas") {
      urlHouses = "https://hp-api.onrender.com/api/characters/";
    } else {
      urlHouses = `https://hp-api.onrender.com/api/characters/house/${searchHouses}`;
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

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchCharacters.toLowerCase())
  );

  const handleSearch = (ev) => {
    setSearchCharacters(ev.target.value);
  };

  const handleSearchHouses = (ev) => {
    setSearchHouses(ev.target.value);
  };

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
const handleReset = () => {
    setSearchCharacters("");
    setSearchHouses("gryffindor");
  };


  return (
    <div className="container">
      <div className="logos-container">
        <div className="logo">
          <img src={hogwartsCastle} alt="Hogwarts Castle" />
        </div>
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Harry_Potter_wordmark.svg"
            alt="Harry Potter"
          />
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                searchCharacters={searchCharacters}
                handleSearch={handleSearch}
                searchHouses={searchHouses}
                handleSearchHouses={handleSearchHouses}
                handleReset={handleReset}
              />
              <CharacterList filteredCharacters={filteredCharacters} />
            </>
          }
        />

        <Route
          path="/character/:characterId"
          element={<CharacterDetail characters={characters} />}
        />
      </Routes>
    </div>
  );
}

export default App;
