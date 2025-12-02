import "../styles/App.scss";
import {useState, useEffect} from "react"; 


function App() {


return (
    <div className="container">
      <div className="logo">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Harry_Potter_wordmark.svg" 
          alt="Harry Potter" 
        />
      </div>

      <form className="search-section">
        <label>Busca por personaje:</label>
        <input 
          type="text" 
          value={searchCharacters}
          onChange={handleSearch}
          placeholder="Nombre del personaje"
        />
      </form>

      <div className="search-section">
        <label>Selecciona la casa:</label>
        <select value={"gryffindor"}>
          <option value="gryffindor">Gryffindor</option>
          <option value="slytherin">Slytherin</option>
          <option value="hufflepuff">Hufflepuff</option>
          <option value="ravenclaw">Ravenclaw</option>
        </select>
      </div>

      <div className="characters-grid">
        {/* {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))} */}
      </div>
    </div>
  );
}

export default App;
