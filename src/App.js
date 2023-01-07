import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import axios from "axios";

import AllSightings from "./Components/AllSightings";
import SingleSighting from "./Components/SingleSighting";
import AddSighting from "./Components/AddSighting";

export default function App() {
  const [sightings, setSightings] = useState([]);

  const navigate = useNavigate();

  const getInitialData = async () => {
    let initialAPICall = await axios.get(
      `${process.env.REACT_APP_API_SERVER}/sightings`
    );
    console.log(initialAPICall.data);
    setSightings(initialAPICall.data);
  };

  useEffect(() => {
    getInitialData();
  }, []);

  const createNewSighting = async (date, location, notes) => {
    let sighting = {
      date,
      location,
      notes,
    };
    let response = await axios.post(
      `${process.env.REACT_APP_API_SERVER}/sightings`,
      sighting
    );
    let newArray = [...sightings];
    newArray.push(response.data);
    setSightings(newArray);
    navigate(`/sightings/${response.data.id}`);
  };

  return (
    <Routes>
      <Route path="/" element={<AllSightings sightings={sightings} />} />
      <Route path="sightings/:id" element={<SingleSighting />} />
      <Route
        path="/new"
        element={<AddSighting addSighting={createNewSighting} />}
      />
      <Route path="*" element={<p>There's nothing here!</p>} />
    </Routes>
  );
}
