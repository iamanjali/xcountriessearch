import { useEffect, useState } from "react";
import Card from "./Card"
import styles from "./Country.module.css"

function Country () {
    const [countries, setCountries] = useState([]);
    const [searchCountry, setSearchCountry] = useState("");

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => setCountries(countries))
        .catch(error => console.error("Error fetching data: ", error))
    }, []);

    const filterCountries = countries.filter(country => {
        const name = country.name.common.toLowerCase();
        const abbr = country.cca3.toLowerCase();
        const altNames = country.altSpellings ? country.altSpellings.map(name => name.toLowerCase()) : [];

        return name.includes(searchCountry.toLowerCase()) || abbr.includes(searchCountry.toLowerCase()) || altNames.some(altName => altName.includes(searchCountry.toLowerCase()));
    });

    return (
        <>
        <input type="text" placeholder="Search for countries..."  value={searchCountry} onChange={(e) => setSearchCountry(e.target.value)}/>
        <div className={styles.country}>
        {  
            filterCountries.map((country) => (
                    <Card key={country.cca3} name={country.name.common} flag={country.flags.png} abbr={country.cca3} />
            ))
        }
        </div>
        </>
    )
}

export default Country;