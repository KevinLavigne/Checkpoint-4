// import axios from "axios";
import { useState } from "react";

import linkedin from "@assets/linkedin .png";
import github from "@assets/logo-github.png";

export default function Home() {
  const [data, setData] = useState("");
  console.warn(data, setData);
  return (
    <section className="flex flex-col justify-center">
      <div className="flex flex-col justify-center gap-10">
        <h1 className="self-center title font-bold text-3xl">
          Bienvenu sur mon PortFolio
        </h1>
        <div className="flex bg-component w-[80%] self-center gap-10 p-10 rounded-3xl">
          <img
            src="https://media-exp2.licdn.com/dms/image/C5603AQH9JerhMKAFog/profile-displayphoto-shrink_100_100/0/1649544967936?e=1663804800&v=beta&t=NuwPJztjyo8pZThm7Xme5svOkSecLU5V5-5LWXNuYY4"
            alt="it's me mario"
            className=" rounded-[100%] aspect-square place-items-center w-[35%] h-[25%] "
          />
          <div className="flex flex-col gap-5 self-center w-[25%]">
            <h2>Nom</h2>
            <h2>Prénom</h2>
            <div className="flex">
              <a href="https://github.com/KevinLavigne">
                <img
                  src={github}
                  alt="logo Github"
                  className="aspect-square w-[55%]"
                />
              </a>
            </div>
            <div className="flex">
              <a href="https://www.linkedin.com/in/lavignekevin/">
                <img
                  src={linkedin}
                  alt="logo Linkedin"
                  className="aspect-square w-[55%]"
                />
              </a>
            </div>
          </div>
          <div>
            <p className="title font-semibold text-2xl"> Mes experiences </p>
            <ul className="gap-10 ">
              <li className="my-5">
                <p>titre</p>
                <p className="pl-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                  alias culpa cum excepturi eaque obcaecati sint qui labore
                  suscipit. Veniam sequi molestiae quo iusto rem alias magnam in
                  excepturi aliquam?
                </p>
              </li>
              <li className="my-5">
                <p>titre</p>
                <p className="pl-5"> description </p>
              </li>
              <li className="my-5">
                <p>titre</p>
                <p className="pl-5"> description </p>
              </li>
              <li className="my-5">
                <p>titre</p>
                <p className="pl-5"> description </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col bg-component self-center gap-10 p-10 rounded-3xl w-[80%] mb-5">
          <h2 className="self-center title font-semibold text-2xl">
            Liste des techno
          </h2>
          <ul className="flex flex-wrap gap-14">
            <li className="w-[30%] flex gap-8 justify-center">
              <img src="" alt="aze" />
              <p className="text-center">techno</p>
            </li>
            <li className="w-[30%] flex gap-8 justify-center">
              <img src="" alt="aze" />
              <p className="text-center">techno</p>
            </li>
            <li className="w-[30%] flex gap-8 justify-center">
              <img src="" alt="aze" />
              <p className="text-center">techno</p>
            </li>
            <li className="w-[30%] flex gap-8 justify-center">
              <img src="" alt="aze" />
              <p className="text-center">techno</p>
            </li>
            <li className="w-[30%] flex gap-8 justify-center">
              <img src="" alt="aze" />
              <p className="text-center">techno</p>
            </li>
            <li className="w-[30%] flex gap-8 justify-center">
              <img src="" alt="aze" />
              <p className="text-center">techno</p>
            </li>
            <li className="w-[30%] flex gap-8 justify-center">
              <img src="" alt="aze" />
              <p className="text-center">techno</p>
            </li>
            <li className="w-[30%] flex gap-8 justify-center">
              <img src="" alt="aze" />
              <p className="text-center">techno</p>
            </li>
            <li className="w-[30%] flex gap-8 justify-center">
              <img src="" alt="aze" />
              <p className="text-center">techno</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
