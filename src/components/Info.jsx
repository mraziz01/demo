import React from "react";

function Info() {
  return (
    <section id="info">
      <div className="info-cont container">
        <div className="row info-item align-items-center">
          <div className="col-12 col-md-6 order-1 order-md-1 itme-top text-md-left">
            <h2>
              For Shayari enthusiasts, embark on a unique journey of Shayari
              with Iqbal Shaidai.
            </h2>
          </div>
          <div className="col-12 col-md-6 order-2 order-md-2 text-center">
            <img
              className="image-top"
              src="image/shaidi.jpg"
              alt="Iqbal Shaidai"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Info;
