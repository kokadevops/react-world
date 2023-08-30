import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";

const BASE_URL = "http://localhost:9000";

export default function App() {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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

    return (
        <BrowserRouter>
            App
            <Routes>
                <Route index element={<Home />} />
                <Route path="app" element={<AppLayout />}>
                    <Route
                        index
                        element={
                            <CityList cities={cities} isLoading={isLoading} />
                        }
                    />
                    <Route
                        path="cities"
                        element={
                            <CityList cities={cities} isLoading={isLoading} />
                        }
                    />
                    <Route
                        path="countries"
                        element={
                            <CountryList
                                cities={cities}
                                isLoading={isLoading}
                            />
                        }
                    />
                    <Route path="form" element={<h3>form</h3>} />
                </Route>
                <Route path="/product" element={<Product />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
