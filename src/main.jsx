import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./components/Layouts/Main.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Pricing from "./components/pricing/Pricing.jsx";
import Services from "./components/Services/Services.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy/Policy.jsx";
import Terms from "./components/Terms/Terms.jsx";
import Contact from "./components/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/policies",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ]
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
