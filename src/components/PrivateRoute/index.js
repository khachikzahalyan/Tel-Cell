import { Navigate } from "react-router-dom";
import { useStore } from "../../store";

const PrivateRoute = ({ children }) => {
  const { store } = useStore();

  return store.isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
