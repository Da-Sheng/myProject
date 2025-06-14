import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(
  <div className="text-3xl font-bold underline text-[#f00]">Hello World</div>,
);
