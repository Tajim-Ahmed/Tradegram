// MapRadiusSelector.jsx
import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Circle,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LocationCircle = ({ position, radius }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 30); // closer zoom
    }
  }, [position, map]);

  return (
    <>
      <Marker position={position} />
      <Circle
        center={position}
        radius={radius}
        pathOptions={{ fillColor: "blue", color: "blue", fillOpacity: 0.3 }}
      />
    </>
  );
};

const MapRadiusSelector = () => {
  const [position, setPosition] = useState([0, 0]);
  const [radius, setRadius] = useState(1000); // 1 km

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
      },
      () => {
        alert("Failed to get location.");
      }
    );
  }, []);

  const radiusOptions = [1, 2, 5, 10, 50]; // km

  return (
    <div className="flex justify-center max-h-50">
        {/* <img src="https://picsum.photos/1000/300" alt="" className="overflow-hidden max-h-50 flex-col " /> */}
    <div className="inline-flex items-center justify-center max-h-50 px-4">
        {/* bg-gray-100 */}
      {/* Circular Map Container */}
      <div className=" m-2 rounded-4xl overflow-hidden shadow-lg border-3 border-gray-400 w-[80vw] max-w-[120px] aspect-square">
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationCircle position={position} radius={radius} />
        </MapContainer>
      </div>

      {/* Radius Buttons */}
      {/* Radius Selector */}
    <div className="m-4 mt-6 text-center">
     <label className="block text-xl font-extrabold text-gray-700 mb-1">
    Select Radius
     </label>
    <select
    value={radius / 1000}
    onChange={(e) => setRadius(parseInt(e.target.value) * 1000)}
    className="mt-1 block w-40 mx-auto rounded-full border-1 border-orange-700 bg-white px-4 py-2 text-orange-700 text-center focus:outline-none focus:ring-2 "
   >
    <option value={1}>1 km</option>
    <option value={2}>2 km</option>
    <option value={5}>5 km</option>
    <option value={10}>10 km</option>
    <option value={50}>50 km</option>
     </select>
  </div>
    </div>
    </div>
  );
};

export default MapRadiusSelector;