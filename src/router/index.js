// src/router.js
import { Navigate } from 'react-router-dom';
import Login from '../pages/login/Login';
import Home from '../pages/Home';
import AllNotices from '../pages/allNotices';
import Layout from "../pages/Layout"
import EditPofile from '../pages/editPofile';
const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: "/",
    // 默認重定向到 /login
    element: <Layout />,
    children: [
      {
        // 默認重定向到 /home
        index: true, // 這表示當父路由為 / 且未匹配具體子路由時，這個路由會被渲染
        element: <Navigate to="login" />,
      },
      {
        index: true,
        path: 'home',
        element: <Home />,
      },
      {
        path: 'allNotices',
        element: <AllNotices />,
      },
      {
        path: 'editPofile',
        element: <EditPofile />,
      },
    ]
  }
];

export default routes;
