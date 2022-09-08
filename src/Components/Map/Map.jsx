import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import "./Map.css";



const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCeDHNi83xewrFrCx8lqWUqybrHPYwRQIM",
  });
  
  
  
  return (
    <div className="map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{width: '100%', height: '90%'}}
          center={{
            lat: -22.986676,
            lng:  -43.253537
          }}
          zoom={15}
        >
         
          
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Map;
