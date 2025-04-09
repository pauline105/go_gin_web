import { ProtectedRoute } from './routerMiddleware/index'
import Login from "../pages/login/Login"
import Layout from "../pages/layout/Layout";
import Home from '@/pages/home/Home.tsx'
import User from "@/pages/auth/user/User.jsx";
import Role from "@/pages/auth/role/Role";
import Department from "@/pages/auth/org/Department";
import Combo from "@/pages/auth/combo/Combo";
import Tenant from "@/pages/auth/tenant/Tenant";

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
            {
                path: '/auth/role',
                element:
                    <ProtectedRoute>
                        <Role />
                    </ProtectedRoute>
            },
            {
                path: '/auth/org',
                element:
                    <ProtectedRoute>
                        <Department />
                    </ProtectedRoute>
            },
            {
                path: '/auth/pkg',
                element:
                    <ProtectedRoute>
                        <Combo />
                    </ProtectedRoute>
            },
            {
                path: '/auth/tenant',
                element:
                    <ProtectedRoute>
                        <Tenant />
                    </ProtectedRoute>
            },
        ]
    }
]
export default routes;