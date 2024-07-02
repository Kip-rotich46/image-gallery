import React from "react";
import "../App.css";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div
      className="text-center card mb-4 shadow-sm col"
      style={{ maxWidth: "18rem" }}
    >
      <div className="col">
      <img src={image.webformatURL} alt="" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title text-primary">Photo by {image.user}</h5>
        <ul className="list-unstyled">
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="card-body">
        {tags.map((tag, index) => (
          <span key={index} className="badge bg-secondary me-2 mb-2">
            #{tag}
          </span>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ImageCard;
