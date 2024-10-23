import Login from "pages/Login";
import ProjectErrors from "pages/ProjectErrors";
import Projects from "pages/Projects";
import Register from "pages/Register";
import { Navigate } from "react-router-dom";

const routesConfig = [
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/project/:name/errors",
    element: <ProjectErrors />,
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
];

export default routesConfig;
