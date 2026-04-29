import pb from '@/shared/api/pocketbase';

export const useAuth = () => {
    return {
        // Devuelve true si hay un token válido guardado
        isAuthenticated: pb.authStore.isValid,
        // Devuelve los datos del usuario (nombre, email, etc)
        user: pb.authStore.record,
        // Función para cerrar sesión
        logout: () => {
            pb.authStore.clear();
        },
    };
};