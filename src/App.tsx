import { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import IpForm from "./components/IpForm";
import IpDetails from "./components/IpDetails";
import { UseIp } from "./hooks/useIp";

const API_KEY = import.meta.env.VITE_IPIFY_API_KEY;

const BASE_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;

function App() {
    const [ip, setIp] = useState("");
    const {data, error, loading} = UseIp(`${BASE_URL}&ipAddress=${ip}`);

    if(loading) return <div>Loading...</div>

    if(error) return <div>There was an error: {error}</div>

    return (
        <div className="App">
            <div className="top-app">
                <h1>IP Address Tracker</h1>
                <div className="ip-form">
                    <IpForm />
                    {data ?  <IpDetails ipDetails={data} /> : null}         
                </div>
            </div>
            <div className="bottom-app"></div>
        </div>
    );
}

export default App;
