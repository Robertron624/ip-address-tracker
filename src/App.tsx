import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

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
            <div className="bottom-app">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>     
                </Marker>
            </MapContainer>
            </div>
        </div>
    );
}

export default App;
