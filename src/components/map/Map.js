import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import "./Map.scss";
import { useEffect } from "react";
import { IoLocationSharp } from "react-icons/io5";

const Map = ({ bounds, center, setBounds, setCenter, places }) => {
  useEffect(() => {
    console.log(bounds);
    console.log(center);
  }, [bounds, center]);

  const [zoom, setZoom] = useState(13);

  return (
    <section className="map__section">
      <div className="map__container" style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={center}
          center={center}
          defaultZoom={zoom}
          margin={[50, 50, 50, 50]}
          onChange={({ center, zoom, bounds }) => {
            setCenter(center);
            setZoom(zoom);
            setBounds(bounds);
          }}
        >
          {places?.map((place, index) => (
            <div
              key={index}
              lat={place.latitude}
              lng={place.longitude}
              className="map__marker"
            >
              <IoLocationSharp />
              {/* <img
                src={
                  place.photo
                    ? place.photo.images.large.url
                    : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                }
                alt={place.name}
              /> */}
            </div>
          ))}
        </GoogleMapReact>
      </div>
    </section>
  );
};

export default Map;
