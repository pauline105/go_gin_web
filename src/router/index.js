// import { Navigate } from "react-router-dom"
import { Navigate } from "react-router-dom";
import Login from "../pages/login/Login"
import Layout from "../pages/layout/Layout";
import Home from '@/pages/home/Home.tsx'
import TabsContainer from '@/pages/TabsContainer'
const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token"); // 或者從 Redux、Context 取得

    return token ? children : <Navigate to="/login" replace />;
};
const routes = [
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element:
            <ProtectedRoute>
                <Layout />
            </ProtectedRoute>,
        children: [{
            index: true,
            element:
                <ProtectedRoute>
                    <Home />
                </ProtectedRoute>
        }]
    }
]
export default routes;