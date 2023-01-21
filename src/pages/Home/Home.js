import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "../../components/Header/Header";
import PlacesList from "../../components/PlacesList/PlacesList";
import Map from "../../components/Map/Map";
import getPlacesData from "../../api/getPlacesData";
import "./Home.scss";

function Home() {
  const [bounds, setBounds] = useState({
    ne: { lat: 0, lng: 0 },
    sw: { lat: 0, lng: 0 },
  });
  const [center, setCenter] = useState({ lat: 6.5244, lng: 3.3792 });
  const [type, setType] = useState("restaurants");

  const result = useQuery([type, bounds], getPlacesData);

  if (result.isLoading) {
    return (
      <div className="places-list__loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  const places = result.data.data;
  console.log(places);

  return (
    <main className="Home">
      <Header />

      <section className="Home__grid">
        <PlacesList
          bounds={bounds}
          type={type}
          setType={setType}
          places={places}
        />
        <Map
          bounds={bounds}
          setBounds={setBounds}
          center={center}
          setCenter={setCenter}
          places={places}
        />
      </section>
    </main>
  );
}

export default Home;
