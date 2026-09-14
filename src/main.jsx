
import { createRoot } from "react-dom/client";
import "./index.css";
import { Auth } from "./pages/Auth.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path='auth' element={<Auth/>}/>
    </Routes>
  </BrowserRouter>,
);
