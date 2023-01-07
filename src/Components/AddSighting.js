import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
// import { useNavigate } from "react-router-dom";

export default function AddSighting(props) {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  //const navigate = useNavigate();

  const submit = () => {
    props.addSighting(date, location, notes);
    setDate("");
    setLocation("");
    setNotes("");
    //navigate("/");
  };

  return (
    <div className="App">
      <h3>Add a New Sighting</h3>
      <label>Date</label>
      <br />
      <input
        type="datetime-local"
        value={date}
        placeholder="Add date"
        onChange={(e) => setDate(e.target.value)}
      />
      <br />
      <br />
      <label>Location</label>
      <br />
      <input
        type="text"
        value={location}
        placeholder="Add location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <br />
      <br />
      <label>Notes</label>
      <br />
      <textarea
        value={notes}
        placeholder="Add notes"
        onChange={(e) => setNotes(e.target.value)}
      />
      <br />
      <br />
      <button onClick={submit}>Submit to add</button>
      <br />
      <br />
      <br />
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}
