import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
        <Route path="/:language/Home" element={<Home />} />
        <Route path="/:language/Projects" element={<Page1 />} />
        <Route path="/SuperSecretAdminAccess" element={<Login />} />
        <Route path="/Admin" element={<Page3 />} />
        <Route path="" element={<Navigate to="FR/Home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
