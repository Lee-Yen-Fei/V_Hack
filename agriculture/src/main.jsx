import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./css/main.css";
import App from "./App.jsx";
import Homepage from "./Homepage";
import FarmGPT from "./FarmGPT/FarmGPT.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import FarmHub from "./FarmHub/FarmHub.jsx";
import FarmLand from "./FarmLand/FarmLand.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/farmhub",
    element: <FarmHub />,
  },
  {
    path: "/farmgpt",
    element: <FarmGPT />,
  },
  {
    path: "/farmland",
    element: <FarmLand />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
