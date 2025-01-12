import React, { useState } from "react";

export default function Display() {
  document.getElementById('my-tittle').innerHTML = 'Portfolio';

  const allimages = [
    { image: import.meta.env.BASE_URL + "/myimages/poert1.png", id: 1, name: "House" },
    { image: import.meta.env.BASE_URL + "/myimages/port2.png", id: 2, name: "Cake" },
    { image: import.meta.env.BASE_URL + "/myimages/port3.png", id: 3, name: "Circus" },
    { image: import.meta.env.BASE_URL + "/myimages/poert1.png", id: 4, name: "House" },
    { image: import.meta.env.BASE_URL + "/myimages/port2.png", id: 5, name: "Cake" },
    { image: import.meta.env.BASE_URL + "/myimages/port3.png", id: 6, name: "Circus" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  function openImage(id) {
    const myimage = allimages.find((img) => img.id == id);
    setSelectedImage(myimage.image);
  }

  function closeImage() {
    setSelectedImage(null);
  }

  return (
    <div className="postfolio-container py-5">
      <div className="my-container">
        <div className="tittle text-center container pt-5 mt-5 mb-3">
          <h1 className="text-uppercase">Portfolio component</h1>
          <div className="star-container the-portfolio">
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
      <div className="container pb-5">
        <div className="row g-5">
          {allimages.map((imh) => {
            return (
              <div key={imh.id} className="col-md-6 col-lg-4">
                <figure className="small-componanent position-relative">
                  <img
                    src={imh.image}
                    className="w-100 rounded-4"
                    alt={imh.name}
                  />
                  <figcaption
                    className="layer rounded-4 position-absolute d-flex justify-content-center align-items-center text-white"
                    onClick={() => openImage(imh.id)}
                  >
                    <span className="text-white fa-solid fa-plus fa-6x"></span>
                  </figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      </div>
      {selectedImage && (
        <div
          className="the-background-image top-0 start-0 end-0 bottom-0 position-fixed bg-black bg-opacity-75 d-flex align-items-center justify-content-center"
          onClick={closeImage}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-3">
              <div className="the-image">
                <img
                  src={selectedImage}
                  className="w-100 rounded-4"
                  alt="Selected"
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
