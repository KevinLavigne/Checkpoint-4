export default function Home() {
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
              <img src="" alt="logo Github" />
              <h2>Lien Github</h2>
            </div>
            <div className="flex">
              <img src="" alt="logo Linkedin" />
              <h2>Lien Linkedin</h2>
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
