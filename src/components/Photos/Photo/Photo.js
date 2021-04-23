import React, { useState } from "react";
import { Suspense } from "react";
import "./style.css";

function Photo(props) {
  const { arraylength, indexId, urls, alt_description, setIsOpen } = props;

  const openImg = (e) => {
    let prev, next;
    if (indexId <= 0) prev = 0;
    else prev = indexId - 1;

    if (indexId == arraylength - 1) {
      next = indexId;
    } else {
      next = indexId + 1;
    }
    const obj = {
      prev: prev,
      curr: indexId,
      next: next,
    };

    setIsOpen(obj);
  };

  return (
    <>
      <div className="photo" onClick={openImg}>
        <img src={`${urls.raw}`} alt={alt_description} />
      </div>
    </>
  );
}

export default Photo;
