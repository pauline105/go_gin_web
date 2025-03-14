// import { Navigate } from "react-router-dom"
import Login from "../pages/login/Login"
import Layout from "../pages/layout/Layout";
const routes = [
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: <Layout />,
    }
]
export default routes;