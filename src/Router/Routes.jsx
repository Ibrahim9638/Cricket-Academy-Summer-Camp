import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Classes from "../Pages/Classes/Classes";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import Instructor from "../Dashboard/Instructor/Instructor";
import PopularInstructor from "../Pages/PopularInstructor/PopularInstructor.jsx";
import AllUsers from "../Dashboard/AllUsers/AllUsers";



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
          element: <PrivateRoutes><PopularInstructor></PopularInstructor></PrivateRoutes>
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
        },
        {
          path: 'allUsers',
          element:<AllUsers></AllUsers>
        }
      ]
    }

  ]);