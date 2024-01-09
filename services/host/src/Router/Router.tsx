
import { createBrowserRouter, } from "react-router-dom";
import App from "../components/App";
// @ts-ignore
import shopRoutes from 'shop/Router';
// @ts-ignore
import adminRoutes from 'admin/Router';


const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      ...shopRoutes,
      ...adminRoutes,
    ]
  },
  {
    path: "/olol",
    element: <div> ---------------------ololo--------------------</div>,
  },
];

export const router = createBrowserRouter(routes);

export default routes;
