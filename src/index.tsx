import { createRoot } from "react-dom/client";
import React from "react";

const App = () => {
  return <h1>Hello world!</h1>;
};

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root container missing in index.html");
}
const root = createRoot(container);
root.render(<App />);
