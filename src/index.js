import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Find all widget divs
const widgetDivs = document.querySelectorAll(".nfthailer-widget");

// Inject our React App into each class
widgetDivs.forEach((div) => {
  createRoot(div).render(
    <React.StrictMode>
      <App symbol={div.dataset.symbol} />
    </React.StrictMode>,
  );
});
