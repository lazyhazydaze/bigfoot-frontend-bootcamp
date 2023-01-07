import { useState } from "react";
import "../App.css";

export default function AddComment(props) {
  const [newComment, setNewComment] = useState("");

  const submit = () => {
    props.addNewComment(newComment);
    setNewComment("");
  };

  return (
    <div className="App">
      <textarea
        value={newComment}
        placeholder="Add a new comment"
        onChange={(e) => setNewComment(e.target.value)}
      />
      <br />
      <button onClick={submit}>Enter</button>
    </div>
  );
}
