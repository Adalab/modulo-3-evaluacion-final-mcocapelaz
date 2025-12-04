import { useParams, Link } from "react-router-dom";
import goldenWizard from "../../images/golden_wizard.jpg";

function CharacterDetail({ characters }) {
  const { characterId } = useParams();
  const character = characters.find((char) => char.id === characterId);

  if (!character) {
    return <p>Ups, personaje no encontrado</p>;
  }

  return (
    <div className="character-detail-container">
      <div className="character-detail">
        <img src={character.image || goldenWizard} alt={character.name} />

        <div className="character-detail-info">
          <h2>{character.name}</h2>
          <p>
            <strong>Casa:</strong> {character.house || "Desconocida"}
          </p>
          <p>
            <strong>Estado:</strong> {character.alive ? "Vivo" : "Muerto"}
          </p>
          <p>
            <strong>Género:</strong> {character.gender || "Desconocido"}
          </p>
          <p>
            <strong>Especie:</strong> {character.species || "Desconocida"}
          </p>
          <p>
            <strong>Nombres alternativos:</strong>{" "}
            {Array.isArray(character.alternate_names) &&
            character.alternate_names.length > 0
              ? character.alternate_names.join(", ")
              : "Ninguno"}
          </p>
        </div>
      </div>
      <Link to="/" className="back-button">
        ← VOLVER
      </Link>
    </div>
  );
}

export default CharacterDetail;
