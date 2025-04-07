// import { Navigate } from "react-router-dom"
import { Navigate } from "react-router-dom";
import Login from "../pages/login/Login"
import Layout from "../pages/layout/Layout";
import Home from '@/pages/home/Home.tsx'
import User from "../pages/auth/user/User.jsx";
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
        children: [
            {
                path: '/workbench',
                element:
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
            },
            {
                path: '/auth/user',
                element:
                    <ProtectedRoute>
                        <User />
                    </ProtectedRoute>
            },
        ]
    }
]
export default routes;