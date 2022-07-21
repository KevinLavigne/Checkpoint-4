import { HashLink as NavLink } from "react-router-hash-link";
import { useContext } from "react";
import ExportContext from "../contexts/Context";
import Formulaire from "./Formulaire";

function NavBar() {
  const { handleForm, isFormOpen } = useContext(ExportContext.Context);
  return (
    <>
      {isFormOpen && <Formulaire />}
      <ul className="flex justify-between py-5 px-10 text-3xl bg-gris mb-8">
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/Projects">
          <li>Projects</li>
        </NavLink>
        <button type="button" onClick={() => handleForm()}>
          <li>Contactez-moi</li>
        </button>
        <select className="bg-gris">
          <option value="1"> FR </option>
          <option value="2"> EN </option>
        </select>
      </ul>
    </>
  );
}

export default NavBar;
