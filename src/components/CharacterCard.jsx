import goldenWizard from "../images/golden_wizard.jpg";

function CharacterCard(character) {
  return (
    <div>
      <div className="character-card" key={character.id}>
                  <img src={character.image || goldenWizard} alt={character.name} />
                  <div className="character-info">
                    <h3>{character.name}</h3>
                    <p>{character.species}</p>
                  </div>
    </div>
    </div>
  );
  
}
export default CharacterCard;