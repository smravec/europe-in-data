'use client';

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function EuropeMap(){
  const center = [54.5260, 15.2551]; // Approximate center of Europe
  const zoom = 3.25; // Suitable zoom level for viewing Europe

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "350px", width: "100%", maxWidth: "500px",zIndex: "0" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

