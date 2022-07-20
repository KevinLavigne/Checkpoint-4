import { HashLink as NavLink } from "react-router-hash-link";
import { useContext } from "react";
import ExportContext from "../contexts/Context";
import Formulaire from "./Counter";

function NavBar() {
  const { handleForm, isFormOpen } = useContext(ExportContext.Context);
  return (
    <>
      {isFormOpen && <Formulaire />}
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/Page1">
          <li>Projects</li>
        </NavLink>
        <button type="button" onClick={() => handleForm()}>
          <li>Contactez-moi</li>
        </button>
        <NavLink to="/Page3">
          <li>Page3</li>
        </NavLink>
      </ul>
    </>
  );
}

export default NavBar;
