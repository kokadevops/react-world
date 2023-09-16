import { createContext, useContext, useEffect, useState } from "react";
const CitiesContext = createContext();

const BASE_URL = "http://localhost:9000";

const CitiesProvider = ({ children }) => {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});

    useEffect(function () {
        async function fetchCities() {
            try {
                setIsLoading(true);
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                setCities(data);
            } catch {
                alert("not found");
            } finally {
                setIsLoading(false);
            }
        }
        fetchCities();
    }, []);

    async function getCity(id) {
        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities/${id}`);
            const data = await res.json();
            setCurrentCity(data);
        } catch {
            alert("not found");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <CitiesContext.Provider
            value={{
                cities,
                isLoading,
                currentCity,
                getCity,
            }}
        >
            {children}
        </CitiesContext.Provider>
    );
};

const useCities = () => {
    const context = useContext(CitiesContext);
    if (context === undefined)
        throw new Error(" CitiesContext was used outside from CitiesProvider");
    return context;
};

export { CitiesProvider, useCities };
