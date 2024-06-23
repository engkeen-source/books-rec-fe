// src/components/TextBoxComponent.js
import React, { useState } from 'react';
import axiosInstance from '../api/axios';
import Button from './Button';

const TextBoxComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    axiosInstance
      .post('/books/recommend', { user_input: inputValue })
      .then((response) => {
        setRecommendations(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error posting data:', error);
        setLoading(false);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Book Recommendation System</h1>
      <div className="mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="What do you want to read today?"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-8">
        <Button onClick={handleSubmit} loading={loading}>
          Ask AI
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <span className="animate-pulse text-8xl">...</span>
        </div>
      ) : recommendations.length > 0 ? (
        <>
          <h2 className="text-xl font-semibold mb-4 underline">Recommendations:</h2>
          {recommendations.length > 0 ? (
            <ul className="space-y-4">
              {recommendations.map((book, index) => (
                <li key={index} className="border-b pb-4 flex space-x-4">
                  {book.cover_image_url && (
                    <img
                      src={book.cover_image_url}
                      alt={`${book.title} cover`}
                      className="w-32 h-auto mb-4 flex-shrink-0"
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold">{book.title}</h3>
                    <p>
                      <strong>Author:</strong> {book.author}
                    </p>
                    <p>
                      <strong>Description:</strong> {book.description}
                    </p>
                    <p>
                      <strong>Suitable for:</strong> {book.suitable_for}
                    </p>
                    <ul className="list-disc pl-5">
                      {book.bullet_points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No recommendations available.</p>
          )}
        </>
      ): null}
    </div>
  );
};

export default TextBoxComponent;
