import { createBrowserRouter } from "react-router-dom";

import Main from "../components/Main";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/secret-admin",
    element: (
      <PrivateRoute isAuthenticated={false}>
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
]);

export default router;
