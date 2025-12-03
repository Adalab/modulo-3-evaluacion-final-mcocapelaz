import { Link } from "react-router-dom";
import goldenWizard from "../images/golden_wizard.jpg";

function CharacterCard({ character }) {
  return (
    
      <div className="character-card">
         <Link to={`/character/${character.id}`} className="character-card">
                  <img src={character.image || goldenWizard} alt={character.name} />
                  <div className="character-info">
                    <h3>{character.name}</h3>
                    <p>{character.species}</p>
                  </div>
                   </Link>
    </div>   
   
  );
  
}
export default CharacterCard;