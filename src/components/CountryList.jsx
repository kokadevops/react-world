import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";

function CountryList({ cities, isLoading }) {
    if (isLoading) return <Spinner />;

    if (!cities.length) return <h3>Add yor disirable country to your list</h3>;

    const countries = cities.reduce((citiesArr, city) => {
        if (!citiesArr.map((citi) => citi.country).includes(city.country))
            return [...citiesArr, { country: city.country, emoji: city.emoji }];
        else return citiesArr;
    }, []);

    return (
        <ul className={styles.countryList}>
            {countries.map((country) => (
                <CountryItem country={country} key={country.emoji} />
            ))}
        </ul>
    );
}

export default CountryList;
