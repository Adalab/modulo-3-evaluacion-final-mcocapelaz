

function Filters({searchCharacters, handleSearch, searchHouses, handleSearchHouses, handleReset}) {

   const handleSubmit= (ev)=> { 
   ev.preventDefault();
   };

  return (
    <div> 
    <div className="search-section">
        <form onSubmit={handleSubmit}>
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
        <form onSubmit={handleSubmit}>
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
      {searchCharacters && <button className="back-button" onClick={handleReset}>Reset</button>}
      </div>
  );


}
export default Filters;



