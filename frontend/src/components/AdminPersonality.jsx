import { useState, useEffect } from "react";
import axios from "axios";
function AdminPersonality() {
  const [data, setData] = useState([]);
  const [adminTouch, setAdminTouch] = useState({});
  const [isAdd, setIsAdd] = useState(false);

  const editData = (area, value) => {
    if (adminTouch !== "add") {
      const newData = [...data];
      newData[adminTouch][area] = value;
      setData(newData);
    } else {
      toAdd[0][area] = value;
      setData(toAdd);
    }
  };
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/personality`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAdd === true) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/personality`, data[0])
        .then(() => {
          console.warn("Yes !");
        })
        .catch(() => {
          console.warn("No !");
        });
    } else {
      axios
        .put(
          `${import.meta.env.VITE_BACKEND_URL}/personality`,
          data[adminTouch]
        )
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
    console.log(data[adminTouch]);
    axios
      .delete(
        `${import.meta.env.VITE_BACKEND_URL}/personality/${
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
                Nom: "",
                Prenom: "",
                lien_git: "",
                lien_linkedin: "",
                img_link: "",
                img_alt: "",
              },
            ];
            setData(newdata);
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
      <form className="">
        <div>
          <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
            Nom
            <input
              value={data[adminTouch]?.Nom}
              className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 self-center py-1 w-4/5 "
              type="text"
              name="Nom"
              placeholder="Nom"
              onChange={(e) => editData(e.target.name, e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
            Prénom
            <input
              value={data[adminTouch]?.Prenom}
              className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 self-center py-1 w-4/5 "
              type="text"
              name="Prenom"
              placeholder="Prénom"
              onChange={(e) => editData(e.target.name, e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
            Lien Github
            <input
              value={data[adminTouch]?.lien_git}
              className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 self-center py-1 w-4/5 "
              type="text"
              name="lien_git"
              placeholder="Lien Github"
              onChange={(e) => editData(e.target.name, e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
            Lien linkedin
            <input
              value={data[adminTouch]?.lien_linkedin}
              className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 self-center py-1 w-4/5 "
              type="text"
              name="lien_linkedin"
              placeholder="Lien linkedin"
              onChange={(e) => editData(e.target.name, e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
            Lien de l&apos;image
            <input
              value={data[adminTouch]?.img_link}
              className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 self-center py-1 w-4/5 "
              type="text"
              name="img_link"
              placeholder="Lien de l'image"
              onChange={(e) => editData(e.target.name, e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2">
            Description de l'image
            <input
              value={data[adminTouch]?.img_alt}
              className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 self-center py-1 w-4/5 "
              type="text"
              name="img_alt"
              placeholder="Description de l'image"
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
export default AdminPersonality;
