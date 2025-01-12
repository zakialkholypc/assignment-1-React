import React from "react";

export default function Footer() {
  return (
    <div className="whole-footer">
      <div className="my-footer-container">
        <div className="container py-5">
          <div className="row text-white text-center py-5 g-5">
            <div className="col-md-4">
              <div className="footer-conponant">
                <h3 className="text-uppercase">Location</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-conponant d-flex flex-column align-items-center">
                <h3>AROUND THE WEB</h3>
                <ul className="list-unstyled d-flex gap-2 mt-2">
                  <li className="my-list-style">
                    <i className="fa-brands fa-facebook"></i>
                  </li>
                  <li className="my-list-style">
                    <i className="fa-brands fa-twitter"></i>
                  </li>
                  <li className="my-list-style">
                    <i className="fa-brands fa-linkedin"></i>
                  </li>
                  <li className="my-list-style">
                    <i className="fa-solid fa-globe"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-conponant">
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-write d-flex align-items-center  justify-content-center">
        <p className="m-0 p-4 text-white">Copyright © Your Website 2021</p>
      </div>
    </div>
  );
}
