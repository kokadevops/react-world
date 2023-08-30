import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";

const CityList = ({ cities, isLoading }) => {
    if (isLoading) return <Spinner />;
    if (!cities.length) return <h3>Add yor disirable city to your list</h3>;

    return (
        <div className={styles.cityList}>
            {cities.map((city) => (
                <CityItem city={city} key={city.id} />
            ))}
        </div>
    );
};
export default CityList;
