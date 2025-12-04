import CharacterCard from "./CharacterCard";

function CharacterList({ filteredCharacters }) {
  return (
    <div className="characters-grid">
      {filteredCharacters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
export default CharacterList;
