import { useState } from "react";
import pb from "@/shared/api/pocketbase";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        setError(null);

        try {
            // NOTA: Asegúrate de que en tu PocketBase exista una colección llamada "users" 
            // con autenticación habilitada (Email/Password).
            await pb.collection('users').authWithPassword(email, password);
        
            return true; 
        } catch (err: any) {
            const message = err.message || "Error al conectar con el servidor.";
            setError(message);
            
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    return { login, isLoading, error };
};