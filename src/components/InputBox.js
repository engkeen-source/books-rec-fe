import React from "react";
import Button from "./Button";

const InputBox = ({ value, onChange, onSubmit, loading }) => (
  <div className="mb-4">
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="What do you want to read today?"
      className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <div className="mb-8">
      <Button onClick={onSubmit} loading={loading}>
        Ask AI
      </Button>
    </div>
  </div>
);

export default InputBox;
