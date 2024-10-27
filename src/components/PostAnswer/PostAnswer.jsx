import React, { useState } from "react";
import axios from "./../../axiosConfig";
import { useParams } from "react-router-dom";
import classes from "./postAnswer.module.css";

const PostAnswer = ({ onAnswerPosted }) => {
  const { id } = useParams(); // Get the question ID from the URL
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); // New state for success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset the error state
    setSuccessMessage(null); // Reset the success message

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "/answers",
        { question_id: id, answer },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAnswer(""); // Clear the input field
      setSuccessMessage("Answer posted successfully!"); // Set success message
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
      onAnswerPosted(); // Call the callback to refresh answers
    } catch (err) {
      console.error("Error posting answer:", err);
      setError("Failed to post answer. Please try again.");
    }
  };

  return (
    <div className={classes.container}>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}{" "}
      {/* Success message */}
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
          placeholder="Your answer..."
        />
        <button className="button" type="submit">Post Answer</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default PostAnswer;
