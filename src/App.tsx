import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

import "./App.scss";
import IpForm from "./components/IpForm";
import IpDetails from "./components/IpDetails";
import { UseIp } from "./hooks/useIp";

const API_KEY = import.meta.env.VITE_IPIFY_API_KEY;

const BASE_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;

interface IpDetails {
  ip: string;
  location: Location;
  as: As;
  isp: string;
}

interface As {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
}

interface Location {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}

function App() {
    const [ip, setIp] = useState("");
    const [domain, setDomain] = useState("");
    const { data, error, loading } = UseIp<IpDetails>(`${BASE_URL}&ipAddress=${ip}&domain=${domain}`);

    if (loading) return <div>Loading...</div>;

    if (error) return <div>There was an error: {error}</div>;

    return (
        <div className="App">
            <div className="top-app">
                <h1>IP Address Tracker</h1>
                <div className="ip-form">
                    <IpForm setDomain={setDomain} setIp={setIp} />
                    {data ? <IpDetails ipDetails={data} /> : null}
                </div>
            </div>
            <div className="bottom-app">
                {data ? (
                    <MapContainer
                        center={[data.location.lat, data.location.lng]}
                        zoom={13}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[data.location.lat, data.location.lng]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                ) : null}
            </div>
        </div>
    );
}

export default App;
