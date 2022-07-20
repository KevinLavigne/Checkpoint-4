/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from "react";
import axios from "axios";
import ExportContext from "../contexts/Context";

function Formulaire() {
  const { handleForm } = useContext(ExportContext.Context);

  const [mailData, setMailData] = useState([
    {
      fullname: "",
      object: "",
      email: "",
      reception: "lavigne.kevin02@gmail.com",
      message: "",
    },
  ]);

  const editData = (area, value) => {
    const newData = [...mailData];
    newData[0][area] = value;
    setMailData(newData);
  };

  const SubmitMail = () => {
    axios
      .post(`http://localhost:5000/sendEmail`, mailData)
      .then((res) => {
        console.warn(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex bg-gray-900/75">
      <div className="absolute bg h-4/5 w-1/2 flex flex-col justify-between bg-slate-50 rounded-[16px]">
        <div className="flex flex-col h-full w-full">
          <div className="absolute top-2 right-1 flex justify-self-start self-end">
            <button
              onClick={() => handleForm()}
              type="button"
              className="text-2xl font-bold py-0 px-1 drop-shadow-md hover:bg-green-300"
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col md:flex-col h-full m-12">
            <h1 className="title text-3xl font-bold mb-6 ml-6">
              Contactez-moi
            </h1>
            <form className="flex flex-col w-full h-full">
              <input
                className="lg:text-xl md:text-base bg-gray-100 border-2 border-gray-300 rounded-lg h-1/3 w-11/12 ml-6 shadow-lg lg:mb-6 md:mb-2"
                type="text"
                name="fullname / prénom et nom"
                placeholder="fullname"
                onChange={(e) => editData(e.target.name, e.target.value)}
                required
              />
              <input
                className="lg:text-xl md:text-base bg-gray-100 border-2 border-gray-300 rounded-lg h-1/3 w-11/12 ml-6 shadow-lg lg:mb-6 md:mb-2"
                type="text"
                name="mail address /adresse email"
                placeholder="email"
                onChange={(e) => editData(e.target.name, e.target.value)}
                required
              />
              <input
                className="lg:text-xl md:text-base bg-gray-100 border-2 border-gray-300 rounded-lg h-1/3 w-11/12 ml-6 shadow-lg lg:mb-6 md:mb-2"
                type="text"
                name="object / objet"
                placeholder="object"
                onChange={(e) => editData(e.target.name, e.target.value)}
                required
              />
              <textarea
                className="lg:text-xl md:text-base bg-gray-100 border-2 border-gray-300 rounded-lg h-4/5 w-11/12 ml-6 shadow-lg lg:mb-6 md:mb-2"
                type="text"
                name="message"
                placeholder="Message to send / Message à transmettre"
                onChange={(e) => editData(e.target.name, e.target.value)}
                required
              />
              <div className="flex flex-row justify-center">
                <button
                  onClick={(e) => {
                    handleForm();
                    e.preventDefault();
                    SubmitMail();
                  }}
                  type="submit"
                  required
                  className="bg-component title shadow-lg text-white lg:text-xl md:text-base font-boldrounded-full hover:bg-green-300 h-4/5 w-4/5 flex justify-center items-center align-center rounded-[12px] lg:mb-8 md:mb-4"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulaire;
