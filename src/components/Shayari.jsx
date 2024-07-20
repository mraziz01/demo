import React from "react";
import Innershayari from "./Innershayari";
import shayaricontent from "../Shayaricontent";
console.log(shayaricontent);

function CreateEntry(shayari) {
  return (
    <Innershayari key={shayari.id} shayaricontent={shayari.shayaricontent} />
  );
}
function Shayari() {
  return (
    <section id="Shayari">
      <div
        id="testimonial-carousel"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">{shayaricontent.map(CreateEntry)}</div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonial-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#testimonial-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
export default Shayari;
