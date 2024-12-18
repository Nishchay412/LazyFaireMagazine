// main.jsx or index.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Team } from "./Team";
import { Executives } from "./Executive";
import { Creative } from "./Creative";
import { Editorial } from "./Editorial";
import { Internal } from "./Internal";
import { External } from "./External";
import { Issues } from "./Issues";
import { About_us } from "./Aboutus";
import { Marketing } from "./Marketing";
import { Read_Magazine } from "./readmagazine";
import { Finance } from "./Finance";
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
    path: "/Team/Editorial",
    element: < Editorial/>,
  },
  {
    path: "/Team/Marketing",
    element: < Marketing/>,
  },
  {
    path: "/Team/Internal",
    element: < Internal/>,
  },
  {
    path: "/Team/Finance",
    element: < Finance/>,
  },
  {
    path: "/Team/External",
    element: < External/>,
  },
  {
    path: "/Magazineread",
    element: <Read_Magazine/>,
  },
  {
    path: "/AboutUs",
    element: <About_us/>,
  },
  {
    path: "/magazine-issues",
    element: <Issues/>,
  }
]);

// Render the router
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);