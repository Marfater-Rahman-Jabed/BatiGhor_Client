import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Main from "../../Layout/Main";
import Register from "../../Pages/Register/Register";
import SecondHome from "../../Pages/SecondHome/SecondHome";
import EidActivitties from "../../Components/ViewActivities/EidActivitties";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/secondHome',
                element: <SecondHome></SecondHome>
            },
            {
                path: '/eid',
                element: <EidActivitties></EidActivitties>
            }
        ]
    }

])