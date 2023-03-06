import React from "react";
import ReactDOM from "react-dom/client";
import "flickity/dist/flickity.min.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    false
  )
);
