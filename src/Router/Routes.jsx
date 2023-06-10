import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructors from "../Pages/PopularInstructor/PopularInstructor.jsx";
import Classes from "../Pages/Classes/Classes";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import Instructor from "../Dashboard/Instructor/Instructor";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/register',
          element:<Register></Register>
        },
        {
          path: '/popular-instructor',
          element: <PrivateRoutes><Instructors></Instructors></PrivateRoutes>
        },
        {
          path: '/classes',
          element: <Classes></Classes>
        },
        

      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children: [
        {
          path:'instructor',
          element:<Instructor></Instructor>
        }
      ]
    }

  ]);