import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

const Map = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    return (
        <div
            className={styles.mapContainer}
            onClick={() => {
                navigate("form");
            }}
        >
            <h1>map</h1>
            <h1>{lat}</h1>
            <h1>{lng}</h1>
        </div>
    );
};
export default Map;
