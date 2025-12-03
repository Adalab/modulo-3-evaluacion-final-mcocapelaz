import goldenWizard from "../images/golden_wizard.jpg";

function CharacterList({ filteredCharacters }) {
  return (
    <div>
      <div className="characters-grid">
        {filteredCharacters.map((character) => (
          <div className="character-card" key={character.id}>
            <img src={character.image || goldenWizard} alt={character.name} />
            <div className="character-info">
              <h3>{character.name}</h3>
              <p>{character.species}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CharacterList;
