import React, { useState } from "react";

export default function Contact() {
  document.getElementById('my-tittle').innerHTML = 'Contact';

  const [inputs, setInputs] = useState([
    {
      id: 1,
      placeholder: "userName",
      showLabel: false,
      value: "",
      type: "text",
    },
    { id: 2, placeholder: "userAge", showLabel: false, value: "", type: "tel" },
    {
      id: 3,
      placeholder: "userEmail",
      showLabel: false,
      value: "",
      type: "email",
    },
    {
      id: 4,
      placeholder: "userPassword",
      showLabel: false,
      value: "",
      type: "password",
    },
  ]);

  const handleInputChange = (id, value) => {
    setInputs((prevInputs) =>
      prevInputs.map((input) => {
        if (input.id === id) {
          input.showLabel = value;
          input.value = value;
          document
            .querySelectorAll("label")
            .forEach((label) => label.classList.toggle("move-up", value));
        }
        return input;
      })
    );
  };

  return (
    <div className="contact-container">
      <div className="my-container pb-5 pt-4 mt-4">
        <div className="tittle text-center  pt-5 mt-5">
          <h1 className="text-uppercase">Contact Section</h1>
          <div className="star-container the-portfolio">
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="my-form-container offset-md-2 col-md-8 px-5 py-0">
            <div className="d-flex flex-column align-items-center">
              {inputs.map((input) => (
                <div key={input.id} className="w-100">
                  <div className="label-container">
                    {input.showLabel && (
                      <label className="align-self-start my-label-style py-0  my-0">
                        {input.placeholder + " :"}
                      </label>
                    )}
                  </div>
                  <div className="input-container">
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      className="my-input w-100 border-0 border-bottom py-0 my-0"
                      value={input.value}
                      onChange={(e) =>
                        handleInputChange(input.id, e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="my-button mt-5 d-flex">
              <button className="my-button-cont border-0 rounded-2 py-2 px-3 text-white">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
