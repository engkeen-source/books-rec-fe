import React from 'react';
import Button from "./Button";

const InputBox = ({ value, onChange, onSubmit, loading }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission on Enter key
      onSubmit();
    }
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="mb-4">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        placeholder="What do you want to read today?"
        className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div className="mb-8">
        <Button onClick={onSubmit} loading={loading}>
          Ask AI
        </Button>
      </div>
    </form>
  );
};

export default InputBox;