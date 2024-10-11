import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

function main() {
  const rootElement = document.getElementById("app");
  if (!rootElement) {
    throw new Error("No root element found");
  }
  const root = createRoot(rootElement);

  root.render(<App />);
}

main();
