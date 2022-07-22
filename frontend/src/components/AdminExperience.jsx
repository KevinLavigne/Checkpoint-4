import { useState, useEffect } from "react";
import axios from "axios";

function AdminExperience() {
  const [data, setData] = useState([]);
  const [adminTouch, setAdminTouch] = useState({});
  const [isAdd, setIsAdd] = useState(false);

  const editData = (area, value) => {
    const newData = [...data];
    newData[adminTouch][area] = value;
    setData(newData);
  };
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/experience`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAdd === true) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/experience`, data[0])
        .then(() => {
          console.warn("Yes !");
        })
        .catch(() => {
          console.warn("No !");
        });
    } else {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/experience`, data[adminTouch])
        .then(() => {
          console.warn("Yes !");
        })
        .catch(() => {
          console.warn("No !");
        });
    }
  };
  const handleSubmitDelete = (e) => {
    e.preventDefault();
    axios
      .delete(
        `${import.meta.env.VITE_BACKEND_URL}/experience/${
          parseFloat(adminTouch) + 1
        }`,
        data[adminTouch]
      )
      .then(() => {
        console.warn("Yes !");
      })
      .catch(() => {
        console.warn("No !");
      });
  };
  return (
    <div className="w-1/2 flex flex-col">
      <select
        className="rounded-xl p-2 "
        onChange={(e) => {
          if (e.target.value === "add") {
            const newdata = [
              {
                titre: "",
                description: "",
                language_id: "",
              },
            ];
            setData(newdata);
            setAdminTouch(0);
            setIsAdd(true);
          } else {
            setIsAdd(false);
            setAdminTouch(e.target.value);
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
      <form className="">
        <div>
          <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
            titre
            <input
              value={data[adminTouch]?.titre}
              className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 self-center py-1 w-4/5 "
              type="text"
              name="titre"
              placeholder="titre"
              onChange={(e) => editData(e.target.name, e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
            description
            <input
              value={data[adminTouch]?.description}
              className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 self-center py-1 w-4/5 "
              type="text"
              name="description"
              placeholder="description"
              onChange={(e) => editData(e.target.name, e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
            Languages FR = 1 , EN = 2
            <input
              value={data[adminTouch]?.language_id}
              className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 self-center py-1 w-4/5 "
              type="text"
              name="language_id"
              placeholder="Languages FR = 1 , EN = 2"
              onChange={(e) => editData(e.target.name, e.target.value)}
              required
            />
          </label>
        </div>
        <div className="flex justify-center gap-10 mt-5">
          <button
            className="bg-indigo p-2"
            type="button"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
          <button
            className="bg-indigo p-2"
            type="button"
            onClick={(e) => handleSubmitDelete(e)}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
export default AdminExperience;
