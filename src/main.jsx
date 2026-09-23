import { createRoot } from "react-dom/client";
import "./index.css";
import { Auth } from "./pages/Auth.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Auth mode="login" />} />
      <Route path="/signup" element={<Auth mode="signup" />} />
      <Route path="/home" element={<Home/>}/>
    </Routes>
  </BrowserRouter>,
);
