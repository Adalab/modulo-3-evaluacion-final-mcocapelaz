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

      <div className="search-section">
        <label>Busca por personaje:</label>
        <input 
          type="text" 
          value={searchTerm}
          onChange={handleSearch}
          placeholder="h"
        />
      </div>

      <div className="search-section">
        <label>Sselecciona la casa:</label>
        <select value={selectedHouse} onChange={handleHouseChange}>
          <option value="">Todas</option>
          <option value="gryffindor">Gryffindor</option>
          <option value="slytherin">Slytherin</option>
          <option value="hufflepuff">Hufflepuff</option>
          <option value="ravenclaw">Ravenclaw</option>
        </select>
      </div>

      <div className="characters-grid">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default App;
