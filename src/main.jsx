// main.jsx or index.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Team } from "./Team";
import { Executives } from "./Executive";

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
    element: <Team />,
  },
  {
    path: "/Team/Executives",
    element: < Executives/>,
  },
]);

// Render the router
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
