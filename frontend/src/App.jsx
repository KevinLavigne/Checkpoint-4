import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import NavBar from "@components/NavBar";
import Page1 from "@pages/Projet";
import Page3 from "@pages/Admin";
import "./App.css";
import Login from "@pages/Login";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Page1 />} />
        <Route path="/SuperSecretAdminAccess" element={<Login />} />
        <Route path="/Admin" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
