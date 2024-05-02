import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing.tsx";
import AllProducts from "./pages/AllProducts.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import ProjectNature from "./pages/ProjectNature.tsx";
import Faqs from "./pages/Faqs.tsx";
import Policies from "./pages/Policies.tsx";
import AboutUs from "./pages/AboutUs.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/products",
        element: <AllProducts type="ALL PRODUCTS" />,
      },
      {
        path: "/makeup",
        element: <AllProducts type="MAKEUP"/>,
      },
      {
        path: "/skincare",
        element: <AllProducts type="SKINCARE" />,
      },
      {
        path: "/babycare",
        element: <AllProducts type="BABYCARE" />,
      },
      {
        path: "/haircare",
        element: <AllProducts type="HAIRCARE" />,
      },
      {
        path: "/contact",
        element: <ContactUs/>,
      },
      {
        path: "/project-nature",
        element: <ProjectNature/>,
      },
      {
        path: "/faqs",
        element: <Faqs/>,
      },
      {
        path: "/policies",
        element: <Policies/>,
      },
      {
        path: "/aboutus",
        element: <AboutUs/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
