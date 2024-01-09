import { Suspense } from "react";
import { createBrowserRouter, } from "react-router-dom";
import AppShop from "../App";
import Shop from "../Shop/Shop.lazy";

const routes = [
  {
    path: "/shop",
    element: <Suspense fallback={'loading'} > <Shop /> </Suspense>,
  },
]

export const router = createBrowserRouter(routes);

export default routes;