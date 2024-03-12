import { createBrowserRouter } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import ProjectDetails from "../pages/ProjectDetails";
import Main from "../layout/Main/Main";
import App from "../App";
import Dashboard from "../layout/Dashboard/Dashboard";
import GoogleSignIn from "../components/common/GoogleSignIn";
import PrivateRoute from "../auth/PrivateRoute";
import DashboardHome from "../pages/dashboard/DashboardHome";
import DashboardAddProject from "../pages/dashboard/DashboardAddProject";
import ManageProjects from "../pages/dashboard/ManageProjects";
import UpdateProject from "../pages/dashboard/UpdateProject";
import Settings from "../pages/dashboard/Settings";

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
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "home",
        element: <DashboardHome />,
      },
      {
        path: "addProject",
        element: <DashboardAddProject />,
      },
      {
        path: "manageProjects",
        element: <ManageProjects />,
      },
      {
        path: "updateProject",
        element: <UpdateProject />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/login",
    element: <GoogleSignIn />,
  },
]);

export default routes;
