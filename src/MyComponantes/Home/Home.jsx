import React from "react";

export default function Home() {
  document.getElementById('my-tittle').innerHTML = 'Home';

  return (
    <div className="about-container  d-flex align-items-center ">
      <div className="container">
        <div className="row">
          <div className="user-image d-flex justify-content-center my-5">
            <img src={import.meta.env.BASE_URL + "/myimages/avataaars.svg"} alt="" />
          </div>
          <div className="my-container text-white">
            <div className="tittle text-center text-uppercase">
              <h1 className="text-uppercase">start Framework</h1>
              <div className="star-container">
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div className="desc">
              <p className="text-center mt-2">
                Graphic Artist - Web Designer - Illustrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
