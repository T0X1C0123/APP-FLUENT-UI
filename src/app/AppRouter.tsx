import { useEffect } from "react";
import { SplashProvider, useSplash } from "./SplashContext";
import { router } from "./Router";
import { SplashScreen } from "@/shared/components/SplashScreen/SplashScreen";
import { RouterProvider } from "react-router";

// Oyente invisible que apaga el splash cuando la ruta termina de cargar
const RouteListener = () => {
    const { hideSplash } = useSplash();

    useEffect(() => {
        const unsubscribe = router.subscribe(() => {
            setTimeout(hideSplash, 300); // 300ms para la animación de salida
        });

        return () => {
            unsubscribe();
        };
    }, [hideSplash]);

    return null;
};

// Contenido interno que usa el contexto
const RouterContent = () => {
    return (
        <>
            <SplashScreen />
                <RouterProvider router={router} />
            <RouteListener />
        </>
    );
};

// Componente principal que envuelve con el Provider
export const AppRouter = () => {
    return (
        <SplashProvider>
            <RouterContent />
        </SplashProvider>
    );
};