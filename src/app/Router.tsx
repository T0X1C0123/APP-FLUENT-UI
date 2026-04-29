import { AuthLayout } from "@/components/Layouts/AuthLayout";
import { ProtectedRoute } from "@/shared/components/ProtectedRoute";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                lazy: async () => {
                    const { default: Login } = await import('@/features/auth/pages/Login');
                    return { Component: Login };
                },
            },
        ],
    },
    {
        path: "/dashboard",
        element: <ProtectedRoute />,
        children: [
            {
                index: true,
                lazy: async () => {
                    const { default: Dashboard } = await import('@/features/dashboard/pages/Dashboard');
                    return { Component: Dashboard };
                },
            },
        ],
    },
]);

