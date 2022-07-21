import axios from "axios";
import { useEffect, useState } from "react";

import linkedin from "@assets/linkedin .png";
import github from "@assets/logo-github.png";

export default function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/home`)
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  return (
    <section className="flex flex-col justify-center">
      <div className="flex flex-col justify-center gap-10">
        <h1 className="self-center title font-bold text-3xl bg-indigo p-4 rounded-3xl ">
          Bienvenu sur mon PortFolio
        </h1>
        <div className="flex bg-component w-[80%] self-center gap-10 p-10 rounded-3xl">
          <img
            src={data?.img_link}
            alt={data?.img_alt}
            className=" rounded-[100%] aspect-square place-items-center w-[35%] h-[25%] "
          />
          <div className="flex flex-col gap-10 self-center w-[25%]">
            <h2 className=" text-2xl">{data?.Nom}</h2>
            <h2 className="text-2xl">{data?.Prenom}</h2>
            <div className="flex">
              <a href={data?.lien_git}>
                <img
                  src={github}
                  alt="logo Github"
                  className="aspect-square w-[75%]"
                />
              </a>
            </div>
            <div className="flex">
              <a href={data?.lien_linkedin}>
                <img
                  src={linkedin}
                  alt="logo Linkedin"
                  className="aspect-square w-[75%]"
                />
              </a>
            </div>
          </div>
          <div className="w-[125%]">
            <p className="title font-semibold text-2xl"> Mes experiences </p>
            <ul className="gap-10 ">
              {data &&
                data.experiences.map((exp) => (
                  <li className="my-5">
                    <p className=" font-semibold text-2xl">{exp.titre}</p>
                    <p className="pl-5 font-semibold text-md ">
                      {exp.description}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col bg-component self-center gap-10 p-10 rounded-3xl w-[80%] mb-5">
          <h2 className="self-center title font-semibold text-2xl">
            Liste des techno
          </h2>
          <ul className="flex flex-wrap gap-14">
            {data &&
              data.techno.map((tech) => (
                <li className="w-[30%] flex flex-col gap-8 justify-center">
                  <img
                    src={tech.img_link}
                    alt={tech.img_alt}
                    className="w-[30%] aspect-[auto] self-center"
                  />
                  <p className="text-center text-2xl font-semibold">
                    {tech.titre}
                  </p>
                </li>
              ))}
            <li className="w-[30%] flex flex-col gap-8 justify-center">
              <p className="text-center text-2xl font-bold text-Red">
                Et bien d&apos;autre a venir
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
