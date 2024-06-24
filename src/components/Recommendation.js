import React, { useState } from "react";
import axiosInstance from "../api/axios";
import InputBox from "./InputBox";
import RecommendationList from "./RecommendationList";
import LoadingIndicator from "./LoadingIndicator";

const Recommendation = () => {
  const [inputValue, setInputValue] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    setError(""); // Reset error state before making a new request
    axiosInstance
      .post("/books/recommend", { user_input: inputValue }, { timeout: 8000 })
      .then((response) => {
        if (response.data.length === 0) {
          setError("No recommendations available.");
        }
        setRecommendations(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        setError("Error fetching recommendations. Please try again later.");
        setLoading(false);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Book Recommendation System</h1>
      <InputBox
        value={inputValue}
        onChange={handleChange}
        onSubmit={handleSubmit}
        loading={loading}
      />
      {loading ? (
        <LoadingIndicator />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : recommendations.length > 0 ? (
        <RecommendationList recommendations={recommendations} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Recommendation;
