import { HashLink as NavLink } from "react-router-hash-link";
import { useContext } from "react";
import ExportContext from "../contexts/Context";
import Formulaire from "./Formulaire";

function NavBar() {
  const {
    handleForm,
    isFormOpen,
    activeLanguage,
    setActiveLanguage,
    languages,
  } = useContext(ExportContext.Context);
  return (
    <>
      {isFormOpen && <Formulaire />}
      <ul className="flex justify-between py-5 px-10 text-3xl bg-gris mb-8">
        <NavLink to={`/${activeLanguage && activeLanguage?.language}/Home`}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to={`/${activeLanguage && activeLanguage.language}/Projects`}>
          <li>Projects</li>
        </NavLink>
        <button type="button" onClick={() => handleForm()}>
          <li>Contactez-moi</li>
        </button>
        <select
          className="bg-gris"
          onChange={(e) => setActiveLanguage(languages[e.target.value - 1])}
        >
          {languages &&
            languages.map((langue) => (
              <option value={langue.id}>{langue.language}</option>
            ))}
        </select>
      </ul>
    </>
  );
}

export default NavBar;
