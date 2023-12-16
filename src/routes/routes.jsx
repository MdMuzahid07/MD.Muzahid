import { createBrowserRouter } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import ProjectDetails from "../pages/ProjectDetails";
import Main from "../layout/Main/Main";
import App from "../App";
import Dashboard from "../layout/Dashboard/Dashboard";
import DashboardHome from "../pages/DashboardHome";
import DashboardAddProject from "../pages/DashboardAddProject";

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
    children: [
      {
        path: "home",
        element: <DashboardHome />,
      },
      {
        path: "addProject",
        element: <DashboardAddProject />,
      },
    ],
  },
]);

export default routes;
