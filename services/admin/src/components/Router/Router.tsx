
import { Suspense } from "react";
import { createBrowserRouter, } from "react-router-dom";
import AppAdmin from "../App";
import About from "../About/About.lazy";

const routes = [
  {
    path: "/admin",
    element: <AppAdmin />,
  },
  {
    path: "/olol",
    element: <div> ololo</div>,
  },
];


export const router = createBrowserRouter(routes);

export default routes;