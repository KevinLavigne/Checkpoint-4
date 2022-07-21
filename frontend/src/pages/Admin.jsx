import { useState } from "react";

function Page3() {
  const [pg3, setPg3] = useState([]);
  console.warn(`${pg3} ${setPg3}`);
  return (
    <div>
      <div>
        <select>
          <option value="0">select a component to modify</option>
          <option value="1">experiences</option>
          <option value="2">techno</option>
          <option value="3">personality</option>
          <option value="4">projet</option>
        </select>
        <select>
          <option value="0"> select a the element to modify </option>
        </select>
      </div>
    </div>
  );
}
export default Page3;
