import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import RegistrationPage from "./pages/registrationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/cadastroatleta",
    element: <RegistrationPage />
  }
])

export { router }
