import { AuthLayout } from "@/components/Layouts/AuthLayout";
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
]);

