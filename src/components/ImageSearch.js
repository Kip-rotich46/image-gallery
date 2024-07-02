import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <form
        onSubmit={onSubmit}
        className="input-group mb-3"
        style={{ width: "50%", gap: '10px' }}
      >
        <input
          onChange={(e) => setText(e.target.value)}
          className="form-control mr-2"
          type="text"
          placeholder="Search Image Term..."
        />
        <div className="input-group-append">
          <button className="btn btn-primary ml-2" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
