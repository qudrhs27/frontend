import { createRoot } from "react-dom/client";
import "./index.css";
import MyComp from "./state/MyComp.tsx";

createRoot(document.getElementById("root")!).render(<MyComp />);
