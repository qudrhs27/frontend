import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./declarative/nav2/Navbar.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>,
);
