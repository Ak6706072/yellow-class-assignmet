import React, { useState } from "react";
import Photo from "./Photo/Photo";
import crypto from "crypto";
import "./style.css";
import Modal from "./Modal/Modal";

function Photos({ photos }) {
  const [isOpen, setIsOpen] = useState(null);
  return (
    <>
      <div className="photos">
        <h1>Photos</h1>
        <div className="photos_all">
          {photos.map((photo, index) => {
            return (
              <Photo
                isOpen={isOpen}
                indexId={index}
                arraylength={photo.length}
                setIsOpen={setIsOpen}
                key={crypto.randomBytes(10).toString("hex")}
                {...photo}
              />
            );
          })}
        </div>
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} photos={photos} setIsOpen={setIsOpen} />
      )}
    </>
  );
}

export default Photos;
