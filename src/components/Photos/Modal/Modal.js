import React from "react";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import "./style.css";

function Modal({ isOpen, setIsOpen, photos }) {
  const close = () => setIsOpen(null);
  const prevImg = (e) => {
    let prev = isOpen.prev - 1;
    let curr = isOpen.curr - 1;
    let next = isOpen.next - 1;
    if (prev <= -1) {
      curr = 0;
      prev = -1;
      next = 1;
    }
    const obj = {
      prev,
      curr,
      next,
    };
    setIsOpen(obj);
  };
  const nextImg = (e) => {
    let prev = isOpen.prev + 1;
    let curr = isOpen.curr + 1;
    let next = isOpen.next + 1;

    if (next >= photos.length) {
      curr = photos.length - 1;
      prev = photos.length - 2;
      next = photos.length;
    }
    const obj = {
      prev,
      curr,
      next,
    };
    setIsOpen(obj);
  };
  return (
    <>
      <div onClick={close} className="img_overlay"></div>
      <div className="img_modal">
        <img
          src={photos[isOpen.curr].urls.raw}
          alt={photos[isOpen.curr].alt_description}
        />
        <div className="img_modal_btn">
          <button onClick={prevImg}>
            <VscArrowLeft />
          </button>
          <button onClick={nextImg}>
            <VscArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
