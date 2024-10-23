import styles from "./Card.module.css"

function Card ({name, flag, abbr}) {
    return (
        <div className={styles.countryCard}>
        <img src={flag} alt={abbr} width="100" height="100"/>
        <h2>{name}</h2>
    </div>
    )
}

export default Card;