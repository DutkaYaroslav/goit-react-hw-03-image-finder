import React from "react";
// import ImageGalaryItem from "../ImageGalleryItem/ImageGalleryItem";

import "./ImageGalery.css";

export default function ImageGalary({ images, modalF }) {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <li
          key={id}
          className="ImageGalleryItem"
          onClick={() => modalF(largeImageURL)}
        >
          <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
        </li>
      ))}
    </ul>
  );
}
