import { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import IpForm from "./components/IpForm";
import IpDetails from "./components/IpDetails";

const API_KEY = import.meta.env.VITE_IPIFY_API_KEY;

const BASE_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;

function App() {
    const [ip, setIp] = useState("");
    const [ipDetails, setIpDetails] = useState({});

    useEffect(() => {

      const clientUrl = `${BASE_URL}${ip}`;

        axios
            .get(clientUrl)
            .then((res) => {
                console.log(res.data);
                setIpDetails(res.data);
            })
            .catch((err) => {
                console.log( 'ERROR -> ', err);
            });
    }, []);

    return (
        <div className="App">
            <div className="top-app">
                <h1>IP Address Tracker</h1>
                <div className="ip-form">
                    <IpForm />
                    <IpDetails ipDetails={ipDetails} />
                </div>
            </div>
            <div className="bottom-app"></div>
        </div>
    );
}

export default App;
