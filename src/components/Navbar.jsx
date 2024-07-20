import React from "react";

function Navbar() {
  return (
    <div className="container-fluid">
      <div class="header-container">
        <img
          className="head-image"
          src="image/fountain-pen-close-up.png"
          alt="pen-image"
        />
        <h1 className="headname">Iqbal Shaidai</h1>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#Shayari">
              <img src="image/align-left.png" />
              Shayari
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Books">
              <img src="image/open-book.png" />
              Books
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">
              <img src="image/info.png" />
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
