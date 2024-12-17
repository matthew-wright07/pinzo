"use client";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function LeafletMap({ latitude, longitude }) {
  useEffect(() => {
    // Initialize the map only after the component mounts (client-side)
    let map;

    // Initialize map only if coordinates are available
    if (latitude && longitude) {
      map = L.map("leaflet-map").setView([latitude, longitude], 13);

      // Add the OpenStreetMap tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Custom pin icon
      const pinIcon = new L.Icon({
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png", // pin icon URL
        iconSize: [25, 41], // size of the icon
        iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -41], // point from which the popup should open relative to the iconAnchor
      });

      // Add a marker at the user's location with custom pin icon
      L.marker([latitude, longitude], { icon: pinIcon })
        .addTo(map)
        .bindPopup(`You are here: ${latitude}, ${longitude}`)
        .openPopup();
    }

    // Cleanup function to remove the map when the component unmounts or when coordinates change
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [latitude, longitude]);

  return <div id="leaflet-map" style={{ width: "100%", height: "400px" }}></div>;
}
