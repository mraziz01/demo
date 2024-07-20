import React from "react";
import Navbar from "./Navbar";
import Info from "./Info";
import Shayari from "./Shayari";
function App() {
  return (
    <div>
      {" "}
      <nav class="navbar navbar-expand-lg navbar-dark">
        <Navbar />
      </nav>
      <Info />
      <Shayari />
      <section id="Books">
        <div class="hedding">
          <h3>POETRY BOOKS</h3>
        </div>
        <div class="row container-books">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">AAATISH-E- SAYYAL</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="read.html" class="btn btn-dark">
                  Read
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">JAGTI AAKHON KE KHAWAB</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-dark">
                  Read
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Books">
        <div class="hedding">
          <h3>PROSE BOOKS</h3>
        </div>
        <div class="row container-books ">
          <div class="col-sm-6 ">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">JAMA TALAASHI</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-dark">
                  Read
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 ">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">BARKATEN VARDI KI</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-dark">
                  Read
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="contact">
        <i className="social-icon fa-brands fa-facebook"></i>
        <i className="social-icon fa-brands fa-twitter"></i>
        <i className="social-icon fa-brands fa-instagram"></i>
        <p className="footer-info">
          2024© Copyright Iqbal Shaidai
          <br /> Developed by <b>MD. Aziz Ur Rahman</b> as part of an internship
          with <b>Ibrahim Raza</b>.
        </p>
      </footer>
    </div>
  );
}

export default App;
