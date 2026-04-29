import { createContext, useContext, useState, useCallback } from "react";

interface SplashContextType {
    isSplashVisible: boolean;
    showSplash: () => void;
    hideSplash: () => void;
}

export const SplashContext = createContext<SplashContextType>({
    isSplashVisible: true, // Empieza true para la carga inicial
    showSplash: () => {},
    hideSplash: () => {},
});

export const SplashProvider = ({ children }: { children: React.ReactNode }) => {
    const [isSplashVisible, setIsSplashVisible] = useState(true);

    const showSplash = useCallback(() => setIsSplashVisible(true), []);
    const hideSplash = useCallback(() => setIsSplashVisible(false), []);
    
    return (
        <SplashContext.Provider value={{ isSplashVisible, showSplash, hideSplash }}>
            {children}
        </SplashContext.Provider>
    );
};

export const useSplash = () => useContext(SplashContext);