"use client";

import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function LeafletMap({ latitude, longitude }) {
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true when the component mounts, so LeafletMap is only initialized on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !latitude || !longitude) return;

    let map;
    const mapContainer = document.getElementById("leaflet-map");

    // Only initialize the map if it's not already initialized
    if (!mapContainer._leaflet_id) {
      map = L.map("leaflet-map").setView([latitude, longitude], 13);

      // Add the OpenStreetMap tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Custom pin icon
      const pinIcon = new L.Icon({
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -41],
      });

      // Add a marker at the user's location
      L.marker([latitude, longitude], { icon: pinIcon })
        .addTo(map)
        .bindPopup(`You are here: ${latitude}, ${longitude}`)
        .openPopup();
    }

    // Cleanup function to remove the map instance when the component unmounts
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [isClient, latitude, longitude]);

  if (!isClient) {
    return (
      <div
        id="leaflet-map"
        style={{ width: "100%", height: "400px", borderRadius: "25px" }}
      />
    );
  }

  return (
    <div
      id="leaflet-map"
      style={{
        width: "100%",
        height: "400px",
        borderRadius: "25px",
      }}
    />
  );
}
