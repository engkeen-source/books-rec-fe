import React from 'react';
import RecommendationItem from './RecommendationItem';

const RecommendationList = ({ recommendations }) => (
  <>
    <h2 className="text-xl font-semibold mb-4 underline">Recommendations:</h2>
    {recommendations.length > 0 ? (
      <ul className="space-y-4">
        {recommendations.map((book, index) => (
          <RecommendationItem key={index} book={book} />
        ))}
      </ul>
    ) : (
      <p>No recommendations available.</p>
    )}
  </>
);

export default RecommendationList;
