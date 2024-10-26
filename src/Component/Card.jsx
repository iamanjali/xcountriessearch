// import styles from "./Card.module.css";
import './Country.css'

function Card({ name, flag }) {
  return (
    <div className="countryCard">
      <img src={flag} alt={name} width="100" height="100" />
      <h2>{name}</h2>
    </div>
  );
}

export default Card;
