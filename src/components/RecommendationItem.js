import React from 'react';

const RecommendationItem = ({ book }) => (
  <li className="border-b pb-4 flex flex-col md:flex-row space-x-0 md:space-x-4">
    {book.cover_image_url && (
      <img
        src={book.cover_image_url}
        alt={`${book.title} cover`}
        className="w-full md:w-32 h-auto mb-4 flex-shrink-0 md:mb-0 object-contain"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
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
);

export default RecommendationItem;

