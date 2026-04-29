import { createContext, useContext, useState, type ReactNode } from "react";

interface SidebarContextType {
    isMobileOpen: boolean;
    toggleMobile: () => void;
    closeMobile: () => void;
}

export const SidebarContext = createContext<SidebarContextType>({
    isMobileOpen: false,
    toggleMobile: () => {},
    closeMobile: () => {},
});

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const toggleMobile = () => setIsMobileOpen(prev => !prev);
    const closeMobile = () => setIsMobileOpen(false);

    return (
        <SidebarContext.Provider value={{ isMobileOpen, toggleMobile, closeMobile }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebarContext = () => useContext(SidebarContext);