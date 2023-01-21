import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import getPlacesData from "../../api/getPlacesData";
import "./PlacesList.scss";

const PlacesList = ({ type, setType, places }) => {
  const charCount = 180;

  return (
    <section className="places-list__section">
      <div className="places-list__filter">
        {/* <h2>Adventures near you</h2> */}

        <div className="places-list__filter__type">
          <label htmlFor="type">Type:</label>
          <select
            name="type"
            id="type"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option value="restaurants">Restaurants</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
          </select>
        </div>

        <div className="places-list__filter__rating">
          <label htmlFor="rating">Rating:</label>
          <select name="rating" id="rating">
            <option value="">All</option>
            <option value="3">Above 3.0</option>
            <option value="4">Above 4.0</option>
            <option value="4.5">Above 4.5</option>
          </select>
        </div>
      </div>

      <div className="places-list__items">
        {/* <div className="places-list__card">
          <img src="https://via.placeholder.com/400" alt="place" />

          <div className="places-list__card-info">
            <h3>Place Name</h3>
            <p>Place Description</p>
          </div>

          <div className="places-list__card-actions">
            <button type="button">Explore</button>
          </div>
        </div> */}

        {places.map((place) => {
          if (!place.name || !place.photo) return null;

          return (
            <div
              className="places-list__card"
              key={`${place?.latitude}+${place?.longitude}+${place?.distance}`}
            >
              <img src={place?.photo?.images?.large?.url} alt={place?.name} />

              <div className="places-list__card-info">
                <h3>{place?.name}</h3>
                <span>{place?.is_closed ? "Closed" : "Open"}</span>
                <p>{place?.rating}</p>
                <p>
                  {place?.description?.substring(0, charCount)}...
                  <button onClick={() => {}}>See more</button>
                </p>
              </div>

              <div className="places-list__card-actions">
                <Link to={`/place/${place?.location_id}`}>View Details </Link>
                <button>
                  <a href={place?.website} target="_blank" rel="noreferrer">
                    Visit Website
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PlacesList;
