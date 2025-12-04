import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Filters from "./filters/Filters";
import CharacterList from "./characters/CharacterList";

import CharacterDetail from "./characters/CharacterDetail";
import Header from "./layout/Header";

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

  const handleReset = () => {
    setSearchCharacters("");
    setSearchHouses("gryffindor");
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

  return (
    <>
      <Header />

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
    </>
  );
}

export default App;
