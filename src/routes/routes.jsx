import { createBrowserRouter } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import ProjectDetails from "../pages/ProjectDetails";
import Main from "../layout/Main/Main";
import App from "../App";
import Dashboard from "../layout/Dashboard/Dashboard";
import PrivateRoute from "../auth/PrivateRoute";
import DashboardHome from "../pages/dashboard/DashboardHome";
import DashboardAddProject from "../pages/dashboard/DashboardAddProject";
import ManageProjects from "../pages/dashboard/ManageProjects";
import UpdateProject from "../pages/dashboard/UpdateProject";
import Settings from "../pages/dashboard/Settings";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import DashboardAddCourse from "../pages/dashboard/course/DashboardAddCourse";
import DashboardManageCourses from "../pages/dashboard/course/DashboardManageCourses";
import DashboardUpdateCourse from "../pages/dashboard/course/DashboardUpdateCourse";
import DashboardAddEducation from "../pages/dashboard/education/DashboardAddEducation";
import DashboardManageEducations from "../pages/dashboard/education/DashboardManageEducations";
import DashboardUpdateEducation from "../pages/dashboard/education/DashboardUpdateEducation";
import DashboardAddExperience from "../pages/dashboard/experience/DashboardAddExperience";
import DashboardManageExperience from "../pages/dashboard/experience/DashboardManageExperience";
import DashboardUpdateExperience from "../pages/dashboard/experience/DashboardUpdateExperience";
import DashboardAddBlog from "../pages/dashboard/blog/DashboardAddBlog";
import DashboardManageBlogs from "../pages/dashboard/blog/DashboardManageBlogs";
import DashboardUpdateBlog from "../pages/dashboard/blog/DashboardUpdateBlog";
import BlogDetails from "../pages/BlogDetails";

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
      {
        path: "/blogDetails/:id",
        element: <BlogDetails />,
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
        path: "updateProject/:updateId",
        element: <UpdateProject />,
      },
      {
        path: "addCourse",
        element: <DashboardAddCourse />,
      },
      {
        path: "manageCourses",
        element: <DashboardManageCourses />,
      },
      {
        path: "updateCourse/:courseId",
        element: <DashboardUpdateCourse />,
      },
      {
        path: "addEducation",
        element: <DashboardAddEducation />,
      },
      {
        path: "manageEducation",
        element: <DashboardManageEducations />,
      },
      {
        path: "updateEducation/:educationId",
        element: <DashboardUpdateEducation />,
      },
      {
        path: "addExperience",
        element: <DashboardAddExperience />,
      },
      {
        path: "manageExperiences",
        element: <DashboardManageExperience />,
      },
      {
        path: "updateExperience/:Id",
        element: <DashboardUpdateExperience />,
      },
      {
        path: "addBlog",
        element: <DashboardAddBlog />,
      },
      {
        path: "manageBlog",
        element: <DashboardManageBlogs />,
      },
      {
        path: "updateBlog/:blogId",
        element: <DashboardUpdateBlog />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);

export default routes;
