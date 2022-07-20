import { useState } from "react";

function Projet() {
  const [pg1, setPg1] = useState([]);
  console.warn(`${pg1} ${setPg1}`);
  return (
    <section>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center gap-10 bg-component w-[80%] self-center rounded-2xl p-10">
          <div className="self-center title font-bold text-3xl my-5">
            Nom du projet
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="my-5 lg:w-1/2">
              <img url="" alt="représentation du projet" className="w-[80%]" />
            </div>
            <div className="my-5 lg:w-1/2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                aliquid, quae ea quas molestias, blanditiis consequuntur, fugit
                quisquam vel velit esse nulla optio itaque deleniti maiores iure
                laborum doloribus quod?
              </p>
              <div className="my-5 flex flex-col lg:flex-row justify-center gap-10">
                <div className="my-5 lg:w-1/2 ">
                  <p className="text-center mb-5 title font-bold text-2xl">
                    Les Techno utiliser
                  </p>
                  <ul className="flex flex-wrap gap-5 lg:gap-10 justify-center">
                    <li className="flex gap-5">
                      <p>techo</p>
                      <img url="" alt="techno" />
                    </li>
                    <li className="flex gap-5">
                      <p>techo</p>
                      <img url="" alt="techno" />
                    </li>
                    <li className="flex gap-5">
                      <p>techo</p>
                      <img url="" alt="techno" />
                    </li>
                    <li className="flex gap-5">
                      <p>techo</p>
                      <img url="" alt="techno" />
                    </li>
                    <li className="flex gap-5">
                      <p>techo</p>
                      <img url="" alt="techno" />
                    </li>
                  </ul>
                </div>
                <div className="my-5 lg:w-1/2">
                  <p className="text-center mb-5 title font-bold text-2xl">
                    La team
                  </p>
                  <ul className="flex flex-wrap gap-5 lg:gap-10 justify-center">
                    <li className="flex gap-5">
                      <img url="" alt=" colegue" />
                      <p> prenom et nom</p>
                      <img url="" alt="lkdn" />
                      <img url="" alt="github" />
                    </li>
                    <li className="flex gap-5">
                      <img url="" alt=" colegue" />
                      <p> prenom et nom</p>
                      <img url="" alt="lkdn" />
                      <img url="" alt="github" />
                    </li>
                    <li className="flex gap-5">
                      <img url="" alt=" colegue" />
                      <p> prenom et nom</p>
                      <img url="" alt="lkdn" />
                      <img url="" alt="github" />
                    </li>
                    <li className="flex gap-5">
                      <img url="" alt=" colegue" />
                      <p> prenom et nom</p>
                      <img url="" alt="lkdn" />
                      <img url="" alt="github" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projet;
