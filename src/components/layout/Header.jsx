
import hogwartsCastle from "../../images/hogwarts_castle.png";

function Header() {
  return (   
      <div className="container">
      <div className="logos-container">
        <div className="logo">
          <img src={hogwartsCastle} alt="Hogwarts Castle" />
        </div>
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Harry_Potter_wordmark.svg"
            alt="Harry Potter"
          />
        </div>
      </div>
    </div>
  );
}
export default Header;