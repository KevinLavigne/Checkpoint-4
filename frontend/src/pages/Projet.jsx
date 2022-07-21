import axios from "axios";
import { useEffect, useState } from "react";

import linkedin from "@assets/linkedin .png";
import github from "@assets/logo-github.png";

function Projet() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/fullProjects`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);
  return (
    <section>
      <div className="flex flex-col justify-center gap-10">
        {data &&
          data.map((projet) => (
            <div className="flex flex-col justify-center gap-10 bg-component w-[80%] self-center rounded-2xl p-10">
              <div className="self-center title font-bold text-4xl my-5">
                {projet.titre}
              </div>
              <div className="flex flex-col lg:flex-row">
                <div className="my-5 lg:w-1/2">
                  <a href={projet.repo_link}>
                    <img
                      src={projet.img_link}
                      alt={projet.img_alt}
                      className="w-[80%]"
                    />
                  </a>
                </div>
                <div className="my-5 lg:w-1/2">
                  <p>{projet.description}</p>
                  <div className="my-5 flex flex-col lg:flex-row   ">
                    <div className="my-5 lg:w-[35%] mr-5">
                      <p className="text-center mb-5 title font-bold text-2xl">
                        Les Techno utiliser
                      </p>
                      <ul className="flex flex-col  justify-center">
                        {projet.techno.map((tech) => (
                          <li className="flex flex-col gap-5 mb-5 justify-center items-center">
                            <p className="text-xl font-semibold">
                              {tech.titre}
                            </p>
                            <img
                              src={tech.img_link}
                              alt={tech.img_alt}
                              className="w-[50%] "
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="my-5 lg:w-[65%]">
                      <p className="text-center mb-5 title font-bold text-2xl">
                        La team
                      </p>
                      <ul className="flex flex-col gap-5 lg:gap-10 justify-center">
                        {projet &&
                          projet.personality.map((perso) => (
                            <li className="flex gap-5">
                              <img
                                src={perso.img_link}
                                alt={perso.img_alt}
                                className="w-[30%] rounded-full aspect-square"
                              />
                              <p className="text-xl font-semibold text-center w-[35%] place-self-center">
                                {perso.Prenom} <br />
                                {perso.Nom}
                              </p>
                              <a
                                href={perso.lien_linkedin}
                                className="place-self-center"
                              >
                                <img src={linkedin} alt="lkdn" />
                              </a>
                              <a
                                href={perso.lien_git}
                                className="place-self-center"
                              >
                                <img src={github} alt="github" />
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
export default Projet;
