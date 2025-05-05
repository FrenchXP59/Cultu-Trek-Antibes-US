import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "../GameContext.jsx";
import { LocationContext } from "../LocationContext.jsx";
import { playSound } from "../utils/soundManager";

const GeoValidation = ({ targetLatitude, targetLongitude, pointReward = 1 }) => {
  const { score, setScore } = useContext(GameContext);
  const { userLocation } = useContext(LocationContext);

  const [message, setMessage] = useState("");
  const [validated, setValidated] = useState(false);
  const [loadingLoc, setLoadingLoc] = useState(true);

  useEffect(() => {
    setLoadingLoc(userLocation === null);
  }, [userLocation]);

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371000;
    const toRad = (x) => (x * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };

  const checkProximity = () => {
    if (validated || loadingLoc || !userLocation) return;
    playSound("buttonClick");

    const { lat, lng } = userLocation;
    const dist = getDistance(lat, lng, targetLatitude, targetLongitude);
    console.log("📍 Calculated distance :", dist, "m");

    if (dist <= 300) {
      setScore((prev) => prev + pointReward);
      setMessage(`✅ Well done! You are ${Math.round(dist)} m from the point.`);
      setValidated(true);
    } else {
      setMessage(`📏 📏 You are ${Math.round(dist)} m away. Please move closer.`);
    }
  };

  return (
    <div>
      <button
        onClick={checkProximity}
        disabled={validated || loadingLoc}
        className={`button-blue ${validated ? "validated" : ""}`}
        style={{ marginTop: "10px" }}
      >
        {validated
          ? "✅ Location confirmed!"
          : loadingLoc
          ? "⏳ Fetching location…"
          : "📍 Confirm my location"
        }
      </button>

      {message && (
        <p className="feedback-message">{message}</p>
      )}
    </div>
  );
};

export default GeoValidation;
