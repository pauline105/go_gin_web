import { Navigate } from "react-router-dom";

const isTokenExpired = (token) => {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const exp = payload.exp;
        const now = Math.floor(Date.now() / 1000);
        return exp < now;

    } catch (e) {
        return true; // 無法解析也視為過期
    }
};
// import TabsContainer from '@/pages/TabsContainer'
export const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");

    if (!token || isTokenExpired(token)) {
        // 清除過期 token
        localStorage.removeItem("token");
        return <Navigate to="/login" replace />;
    }

    return children;
};