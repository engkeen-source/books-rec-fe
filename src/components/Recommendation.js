import React, { useState } from "react";
import axiosInstance from "../api/axios";
import InputBox from "./InputBox";
import RecommendationList from "./RecommendationList";
import LoadingIndicator from "./LoadingIndicator";

const Recommendation = () => {
  const [inputValue, setInputValue] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    axiosInstance
      .post("/books/recommend", { user_input: inputValue })
      .then((response) => {
        setRecommendations(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
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
      ) : (
        recommendations.length > 0 && (
          <RecommendationList recommendations={recommendations} />
        )
      )}
    </div>
  );
};

export default Recommendation;
