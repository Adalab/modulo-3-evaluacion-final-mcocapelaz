import CharacterCard from "./CharacterCard";
import { Link } from 'react-router-dom';

function CharacterList({ filteredCharacters }) {
  return (
    
      <div className="characters-grid">
        {filteredCharacters.map((character) => (          
                    <CharacterCard 
          key={character.id}
          character={character}          
          />           
        ))}
      </div>
   
  );
}
export default CharacterList;
