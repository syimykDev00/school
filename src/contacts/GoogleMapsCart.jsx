import React, { useState, useCallback } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "500px",
};
const center = {
  lat: 42.824, // баштапкы координата (Нарынга жакын)
  lng: 74.991,
};

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "https://maps.app.goo.gl/FufNPtNf7rzmfYZdA", // Google API ключуңду жаз
    libraries,
  });

  const [selected, setSelected] = useState(null);
  const [address, setAddress] = useState("");

  // Google Maps ссылканы түзүүчү функция
  const generateGoogleMapsLink = (lat, lng) => {
    return `https://www.google.com/maps?q=${lat},${lng}`;
  };

  // Картадан чыкылдатканда иштейт
  const onMapClick = useCallback(async (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setSelected({ lat, lng });

    // Геокодинг (координата -> дарек)
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === "OK" && results[0]) {
        setAddress(results[0].formatted_address);
      } else {
        setAddress("Дарек табылган жок");
      }
    });
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={14}
      center={center}
      onClick={onMapClick}
    >
      {selected && (
        <Marker
          position={{ lat: selected.lat, lng: selected.lng }}
          onClick={() => setSelected(selected)}
        />
      )}

      {selected && (
        <InfoWindow
          position={{ lat: selected.lat, lng: selected.lng }}
          onCloseClick={() => setSelected(null)}
        >
          <div>
            <h3>Дарек:</h3>
            <p>{address}</p>
            <a
              href={generateGoogleMapsLink(selected.lat, selected.lng)}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Google Maps’тан ачуу
            </a>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
