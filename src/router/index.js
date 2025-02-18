// src/router.js
import { Navigate } from 'react-router-dom';
import Login from '../pages/login/Login';
import Home from '../pages/Home';
import AllNotices from '../pages/allNotices';
import Layout from "../pages/Layout"
import EditPofile from '../pages/editPofile';
import UserManage from '../pages/UserManage';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token"); // 檢查是否有 token

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: "/",
    // 默認重定向到 /login
    element: <ProtectedRoute><Layout /></ProtectedRoute>,
    children: [
      {
        path: 'home', // 默認重定向到 /home
        index: true,  // 這表示當父路由為 / 且未匹配具體子路由時，這個路由會被渲染
        element: <ProtectedRoute><Home /></ProtectedRoute>,
      },
      {
        path: 'allNotices',
        element: <ProtectedRoute> <AllNotices /></ProtectedRoute>,
      },
      {
        path: 'editPofile',
        element: <ProtectedRoute><EditPofile /></ProtectedRoute>,
      },
      {
        path: 'userManage',
        element: <ProtectedRoute><UserManage /></ProtectedRoute>,
      },
    ]
  }
];

export default routes;
