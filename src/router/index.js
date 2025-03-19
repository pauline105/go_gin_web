// import { Navigate } from "react-router-dom"
import Login from "../pages/login/Login"
import Layout from "../pages/layout/Layout";
import Home from '@/pages/home/Home.tsx'
import TabsContainer from '@/pages/TabsContainer'
const routes = [
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: <Layout />,
        children: [{
            index: true,
            element: <Home />,
        }]
    }
]
export default routes;