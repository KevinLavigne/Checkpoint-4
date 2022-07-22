import { useState, useEffect } from "react";
import axios from "axios";
function AdminExperience() {
  const [data, setData] = useState([]);
  const [adminTouch, setAdminTouch] = useState({});
  const [isAdd, setIsAdd] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/experience`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);
  return (
    <select
      className="rounded-xl p-2"
      onChange={(e) => {
        if (e.target.value === "add") {
          setData(data[0]);
          setAdminTouch(0);
          setIsAdd(true);
        } else {
          setIsAdd(false);
          setAdminTouch(e.target.value);
          console.log(data);
        }
      }}
    >
      <option value="0"> select a the element to modify </option>
      {data.map((elem) => (
        <option value={data.indexOf(elem)}>
          Mettre a jour ou supprimer {elem.id}
        </option>
      ))}
      <option value="add"> en ajouter un </option>
    </select>
  );
}
export default AdminExperience;
