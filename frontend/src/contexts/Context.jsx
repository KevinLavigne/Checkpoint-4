import { createContext, useState, useEffect } from "react";
import axios from "axios";

const Context = createContext();

function Provider({ children }) {
  const [state, setState] = useState([]);
  const [state2, setState2] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [user, setUser] = useState();
  const [activeLanguage, setActiveLanguage] = useState({
    id: 1,
    language: "FR",
  });
  const [languages, setLanguages] = useState([{}]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/languages/`)
      .then((response) => {
        setLanguages(response.data);
        setActiveLanguage(response.data[0]);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  const handleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <Context.Provider
      value={{
        state,
        setState,
        state2,
        setState2,
        isFormOpen,
        handleForm,
        setUser,
        user,
        activeLanguage,
        setActiveLanguage,
        languages,
      }}
    >
      {children}
    </Context.Provider>
  );
}
const ExportContext = {
  Context,
  Provider,
};
export default ExportContext;
