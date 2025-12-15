import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Navbar() {
  return (
    <>
      {/* Fixed Navbar */}
      <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">Minty</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link ms-5" href="#">Save</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-3" href="#">Invest</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-3" href="#">Travel</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-3" href="#">Mobile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Plans</a>
              </li>
            </ul>

            <a className="btn btn-link text-success me-3">Log in</a>
            <button
              className="btn px-4 py-2"
              style={{ backgroundColor: "#007F6D", color: "white", borderRadius: "8px" }}
            >
              Add Expense
            </button>

            <span className="ms-3">DE | <b>EN</b></span>
          </div>
        </div>
      </nav>

      {/* Spacer so content doesn't go under fixed navbar */}
      <div style={{ paddingTop: "60px" }}></div>

      {/* Full-screen Banner Image */}
      <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
        <img
          src="/icecream3.jpg"
          alt="Banner Image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // ensures image covers the entire div
          }}
        />
      </div>

      {/* Example scrollable content */}
    
    </>
  );
}

export default Navbar;
