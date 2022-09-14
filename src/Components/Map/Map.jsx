import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./Map.css";

const libraries = ["places"];
const mapContainerStyle = {
  width: "60vw",
  height: "20vw",
};
const center = {
  lat: -22.9865007,
  lng: -43.2522318,
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeId: "satellite",
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCeDHNi83xewrFrCx8lqWUqybrHPYwRQIM",
    libraries,
  });

  const [markers, setMarkers] = React.useState([]);
  const [markerSelect, setMarkerSelected] = React.useState(null);

  if (loadError) return "Erro ao carregar o mapa";
  if (!isLoaded) return "Carregando mapas";

  return (
    <div className="map">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={19}
        center={center}
        options={options}
        onClick={(e) => {
          setMarkers((current) => [
            ...current,
            {
              lat: e.latLng.lat(),
              lng: e.latLng.lng(),
              time: new Date(),
            },
          ]);
        }}
      >
        {markers.map((marker) => (
          <Marker
            title={
              "Bairro: Rocinha " +
              "\n" +
              "Rio de Janeiro - RJ " +
              "\n" +
              "latitude: " +
              marker.lat.toString() +
              "\n" +
              "longitude: " +
              marker.lng.toString()
            }
            draggable={true}
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
