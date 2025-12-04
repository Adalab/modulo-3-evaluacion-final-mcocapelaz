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
  const [searchGender, setSearchGender] = useState("all");
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

  const filteredCharacters = characters.filter((character) => {
   let nameFilter=
        searchCharacters.length < 3
           
          ?true 
        : character.name
      .toLocaleLowerCase()
      .includes(searchCharacters.toLocaleLowerCase());   
    
    let genderFilter= 
      searchGender=== "all"
    ? true 
      : character.gender === searchGender;
  
     return nameFilter && genderFilter;
});
    
     
   
  



  if (loading) {
    return <p>Cargando personajes...</p>;
  }

  if (filteredCharacters.length === 0 && searchCharacters.length >= 3) {
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
                searchHouses={searchHouses}
                setSearchCharacters={setSearchCharacters}
                setSearchHouses={setSearchHouses}
                searchGender={searchGender}
                setSearchGender={setSearchGender}
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
