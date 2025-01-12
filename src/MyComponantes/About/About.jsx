import React from "react";

export default function About() {
  document.getElementById("my-tittle").innerHTML = "About";
  return (
    <div className="about-container d-flex align-items-center mt-5">
      <div className="container">
        <div className="row">
          <div className="my-container text-white mt-5">
            <div className="tittle text-center text-uppercase">
              <h1>About component</h1>
              <div className="star-container">
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div className="content container mt-3">
              <div className="row px-5 g-4">
                <div className="left col-md-6">
                  <p className="text-start">
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
                <div className="right col-md-6">
                  <p className="text-start">
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
