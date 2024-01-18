import { RouterProvider } from "react-router-dom";
import router from "./router";
import { StoreProvider } from "./store";

const App = () => {
  return (
    <StoreProvider>
      <RouterProvider router={router} />;
    </StoreProvider>
  );
};

export default App;
