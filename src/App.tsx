import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import AccordianPage from "./pages/accordian-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/accordian",
    element: <AccordianPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
