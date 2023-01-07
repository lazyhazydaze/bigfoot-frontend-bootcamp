import React from "react";
import "../App.css";
// import axios from "axios";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AllSightings(props) {
  // const [sightings, setSightings] = useState([]);

  // const getInitialData = async () => {
  //   let initialAPICall = await axios.get(
  //     `${process.env.REACT_APP_API_SERVER}/sightings`
  //   );
  //   console.log(initialAPICall.data);
  //   setSightings(initialAPICall.data);
  // };

  // useEffect(() => {
  //   getInitialData();
  // }, []);

  return (
    <div className="App">
      <h1>Homepage</h1>
      <h4>
        Click a box to view details or{" "}
        <Link to={`/new`}>add a new sighting</Link>
      </h4>
      <div className="sightings-container">
        {props.sightings && props.sightings.length > 0 ? (
          props.sightings.map((sighting) => (
            <Link to={`/sightings/${sighting.id}`}>
              <div className="sighting" key={sighting.id}>
                <h4>{sighting.date}</h4>
                <h5>{sighting.location}</h5>
              </div>
            </Link>
          ))
        ) : (
          <p>Failure</p>
        )}
      </div>
    </div>
  );
}
