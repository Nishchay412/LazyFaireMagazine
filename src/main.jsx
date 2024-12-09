// main.jsx or index.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Team } from "./Team";
import { Executives } from "./Executive";
import { Creative } from "./Creative";

import { Read_Magazine } from "./readmagazine";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import "./index.css";
import App from "./App.jsx";


// Define the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Team",
    element: <Team/>,
  },
  {
    path: "/Team/Executives",
    element: < Executives/>,
  },
  {
    path: "/Team/Creative",
    element: < Creative/>,
  },
  {
    path: "/Magazineread",
    element: <Read_Magazine/>,
  }
]);

// Render the router
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);