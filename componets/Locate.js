"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import LeafletMap to avoid SSR issues
const LeafletMap = dynamic(() => import("./LeafletMap"), { ssr: false });

export default function Locate() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  async function handleClick() {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }

  function handleRemove() {
    setLatitude(null);
    setLongitude(null);
  }

  return (
    <div className="container my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
            Track Your Location In Real Time
          </h1>
          <p className="lead">
            Effortlessly track and display your current location with real-time GPS integration. Our intuitive, responsive design ensures a seamless experience, whether you're on desktop or mobile.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button
              onClick={handleClick}
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
            >
              Get Current Location
            </button>
            <button
              onClick={handleRemove}
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Reset
            </button>
          </div>
          <p className="lead">Latitude: {latitude ?? "Not Available"}</p>
          <p className="lead">Longitude: {longitude ?? "Not Available"}</p>
        </div>
        <div
          className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg"
          style={{ borderRadius: "25px", backgroundColor: "#f0f0f0" }}
        >
          {/* Render the map only if latitude and longitude are available */}
          {latitude && longitude ? (
            <LeafletMap latitude={latitude} longitude={longitude} />
          ) : (
            <div
              style={{
                width: "100%",
                height: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ color: "#888", fontSize: "18px" }}>Map Placeholder</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
