import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Edit from "../pages/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
]);

export default router;
