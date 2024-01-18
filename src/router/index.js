import { createBrowserRouter } from "react-router-dom";

import Main from "../components/Main";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";
import Admin from "../components/Admin";

const router = createBrowserRouter([
  {
    path: "/secret-admin",
    element: (
      <PrivateRoute>
        <div>Secret Admin</div>
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

export default router;
