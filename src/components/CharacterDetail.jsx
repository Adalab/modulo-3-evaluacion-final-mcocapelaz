import { useParams, Link } from "react-router-dom";
import goldenWizard from "../images/golden_wizard.jpg";


function CharacterDetail({ characters }) {
      const { characterId } = useParams();
      const character = characters.find(char => char.id === characterId);

  if (!character) {
    return <p>Personaje no encontrado</p>;
  }
  return (
    <div className="character-detail">
      <Link to="/" className="back-button">← Volver</Link>
      <div className="character-card">
        <img
          src={character.image || goldenWizard}
          alt={character.name}
          className="character-img"
        />
        <div className="character-detail-container">
          <h3>Nombre: {character.name}</h3>
          <p>Casa: {character.house}</p>
          <p className={character.alive ? "alive" : "dead"}>
            Estado: {character.alive ? "Alive" : "Dead"}
          </p>
          <p>Género: {character.gender}</p>
          <p>Especie: {character.species}</p>
          <p>Nombres alternativos: {Array.isArray(character.alternate_names) ? character.alternate_names.join(", ") : character.alternate_names || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;