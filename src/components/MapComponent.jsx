// src/components/MapComponent.jsx
import React, { useState, useEffect, memo, useContext } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { PLACES_DATA } from "../data/placesData";
import MyMarker from "./MyMarker";
import BottomSheet from "./BottomSheet";
import RecenterMap from "../utils/RecenterMap";
import { GameContext } from "../GameContext";

// Coordonnées de la Place Nationale (point central initial)
const placeNationaleCoords = { lat: 43.58125, lng: 7.1259 };

// Icônes Leaflet
const myIcon = L.icon({
  iconUrl: "/images/marker-icon.png",
  iconRetinaUrl: "/images/marker-icon-2x.png",
  shadowUrl: "/images/marker-shadow.png",
  iconSize: [20, 34],
  iconAnchor: [10, 34],
  popupAnchor: [1, -30],
});

const departIcon = L.icon({
  iconUrl: "/images/depart-icon.png",
  iconRetinaUrl: "/images/depart-icon-2x.png",
  shadowUrl: "/images/marker-shadow.png",
  iconSize: [40, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

const userIcon = L.icon({
  iconUrl: "/images/myLocIcon.png",
  iconRetinaUrl: "/images/myLocIconx2.png",
  shadowUrl: "/images/marker-shadow.png",
  iconSize: [25, 25],
  iconAnchor: [12, 25],
  popupAnchor: [1, -24],
  shadowSize: [25, 25],
});

const MapComponent = ({ onPopupToggle }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [userLocation, setUserLocation] = useState(placeNationaleCoords);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { shouldRecenter, setRecenter } = useContext(GameContext);

  // Notifier le parent de l'ouverture/fermeture du popup
  useEffect(() => {
    onPopupToggle?.(!!selectedPlace);
  }, [selectedPlace, onPopupToggle]);

  // Détection d'écran mobile
  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 500);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Géolocalisation continue
  useEffect(() => {
    if (!navigator.geolocation) {
      console.warn("⚠️ La géolocalisation n'est pas supportée par ce navigateur.");
      return;
    }
    const watchId = navigator.geolocation.watchPosition(
      (pos) => setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => setUserLocation(placeNationaleCoords),
      { enableHighAccuracy: false, maximumAge: 30000, timeout: 20000 }
    );
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  // Recentrage sur la Place Nationale si demandé
  useEffect(() => {
    if (shouldRecenter) {
      setUserLocation(placeNationaleCoords);
      setRecenter(false);
    }
  }, [shouldRecenter, setRecenter]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <MapContainer center={userLocation} zoom={14} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* Marqueurs des lieux */}
        {PLACES_DATA.map((place) => (
          <MyMarker
            key={place.id}
            place={place}
            selectedPlace={selectedPlace}
            setSelectedPlace={setSelectedPlace}
            icon={myIcon}
            departIcon={departIcon}
          />
        ))}

        {/* Position de l'utilisateur */}
        {userLocation && (
          <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon} zIndexOffset={-1000} />
        )}

        {/* Recentrage automatique */}
        {shouldRecenter && (
          <RecenterMap
            lat={placeNationaleCoords.lat}
            lng={placeNationaleCoords.lng}
            trigger={true}
            onDone={() => setRecenter(false)}
          />
        )}
      </MapContainer>

      {/* Bottom sheet sur mobile */}
      {isSmallScreen && selectedPlace && (
        <BottomSheet
          place={selectedPlace}
          onClose={() => setSelectedPlace(null)}
          userLocation={userLocation}
        />
      )}
    </div>
  );
};

export default memo(MapComponent);
