import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import NavBar from "@components/NavBar";
import Page1 from "@pages/Projet";
import Page2 from "@pages/Login";
import Page3 from "@pages/Page3";
import Error404 from "@pages/error404";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Page1 />} />
        <Route path="/mysuperadminlogin" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
