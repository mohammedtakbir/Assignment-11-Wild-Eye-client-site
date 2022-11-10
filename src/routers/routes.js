import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/Reviews/UserReviews";
import Reviews from "../Pages/Reviews/Reviews";
import ServiceDetails from "../Pages/Shared/Services/ServiceDetails";
import Services from "../Pages/Shared/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../routers/PrivateRoute";
import AddService from "../Pages/Shared/Services/AddService";
import EditReview from "../Pages/Reviews/EditReview";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/service-details/:id',
                loader: ({ params }) => fetch(`https://wild-eye.vercel.app/service-details/${params.id}`),
                element: <ServiceDetails />
            },
            {
                path: '/reviews/:id',
                loader: ({ params }) => fetch(`https://wild-eye.vercel.app/service-details/${params.id}`),
                element: <PrivateRoute><Reviews /></PrivateRoute>
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews /></PrivateRoute>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService /></PrivateRoute>
            },
            {
                path: '/editReview/:id',
                element: <EditReview />
            }
        ]
    }
])