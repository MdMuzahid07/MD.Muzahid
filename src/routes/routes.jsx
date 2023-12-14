import { createBrowserRouter } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import ProjectDetails from "../pages/ProjectDetails";
import Dashboard from "../pages/Dashboard";
import Main from "../layout/Main/Main";
import App from "../App";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/projects",
        element: <Portfolio />,
      },
      {
        path: "/projectDetails/:projectId",
        element: <ProjectDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default routes;
