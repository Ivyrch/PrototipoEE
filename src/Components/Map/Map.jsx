import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import "./Map.css";



const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCeDHNi83xewrFrCx8lqWUqybrHPYwRQIM",
  });
  
  const position = {
    lat: -22.986676,
    lng:  -43.253537
  }
  


  return (
    <div className="map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{width: '100%', height: '90%'}}
          center={position}
          zoom={15}
        >
          
         
             <Marker position={{lat: -22.98661571556714, lng: -43.25394252698286}} draggable={true}/>  
          
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Map;
