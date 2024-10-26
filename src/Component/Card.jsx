import styles from "./Card.module.css"

function Card ({name, flag}) {
    return (
        <div className={styles.countryCard}>
        <img src={flag} alt={`Flag of ${name}`} width="100" height="100"/>
        <h2>{name}</h2>
    </div>
    )
}

export default Card;