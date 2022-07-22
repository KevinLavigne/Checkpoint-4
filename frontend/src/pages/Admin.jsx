import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import AdminPersonality from "@components/AdminPersonality";
import AdminExperience from "@components/AdminExperience";
import AdminTechno from "@components/AdminTechno";
import AdminProjet from "@components/AdminProjet";
import ExportContext from "../contexts/Context";

function Page3() {
  const { user } = useContext(ExportContext.Context);
  const [area, setArea] = useState("");
  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="flex flex-col items-center gap-5">
      <select
        className="rounded-xl p-2"
        onChange={(e) => {
          setArea(e.target.value);
        }}
      >
        <option value="0">select a component to modify</option>
        <option value="experience">experiences</option>
        <option value="techno">techno</option>
        <option value="personality">personality</option>
        <option value="Projet">projet</option>
      </select>
      {area === "personality" ? <AdminPersonality /> : null}
      {area === "techno" ? <AdminTechno /> : null}
      {area === "experience" ? <AdminExperience /> : null}
      {area === "Projet" ? <AdminProjet /> : null}
    </div>
  );
}

export default Page3;
