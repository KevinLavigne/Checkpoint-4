import { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [state, setState] = useState([]);
  const [state2, setState2] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [user, setUser] = useState();
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
