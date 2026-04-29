import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/shared/hooks/useAuth";

export const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    // Si no está logueado, lo expulsa al login
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    // Si está logueado, renderiza las rutas hijas (el Dashboard)
    return <Outlet />;
};













