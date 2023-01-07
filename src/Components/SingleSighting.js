import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AddComment from "./AddComment";

export default function SingleSighting() {
  const [singleSighting, setSingleSighting] = useState({});
  const [comments, setComments] = useState([]);

  let { id } = useParams();

  const getSingleSighting = async () => {
    let response = await axios.get(
      `${process.env.REACT_APP_API_SERVER}/sightings/${id}`
    );
    setSingleSighting(response.data);
  };

  useEffect(() => {
    getSingleSighting();
  }, []);

  const getAllComments = async () => {
    let response = await axios.get(
      `${process.env.REACT_APP_API_SERVER}/sightings/${id}/comments`
    );
    console.log("response.data", response.data);
    setComments(response.data);
  };

  useEffect(() => {
    getAllComments();
  }, []);

  const createNewComment = async (content) => {
    let comment = {
      content: content,
      sighting_id: id,
    };
    let response = await axios.post(
      `${process.env.REACT_APP_API_SERVER}/sightings/${id}/comments`,
      comment
    );
    let newArray = [...comments];
    newArray.push(response.data);
    setComments(newArray);
  };

  return (
    <>
      <Link to="/">Back to Homepage</Link>
      <h1>Details of single sighting</h1>
      <h2>{singleSighting.date}</h2>
      <h3>{singleSighting.location}</h3>
      <p>{singleSighting.notes}</p>
      <br />
      <AddComment addNewComment={createNewComment} />
      <br />
      <h1>Comments</h1>
      {comments && comments.length > 0 ? (
        <div>
          <ol>
            {comments.map((comment) => (
              <li key={comment.id}>{comment.content}</li>
            ))}
          </ol>
        </div>
      ) : (
        <p>0 comments</p>
      )}
    </>
  );
}
