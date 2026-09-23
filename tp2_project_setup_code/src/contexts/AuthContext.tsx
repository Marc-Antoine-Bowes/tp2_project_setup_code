import { auth } from "@/firebaseConfig";
import { AuthContextType } from "@/types/contexts";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);

            } else {
                setIsAuthenticated(false);
            }
        });
        return unsub;
    }, []);

    const register = async (email: string, pswd: string): Promise<boolean | string> => {
        try {
            await createUserWithEmailAndPassword(auth, email, pswd);
            setIsAuthenticated(true);
            return true;
        } catch (error) {
            console.error("Erreur d'enregistrement:", error);
            return "Échec de l'enregistrement. Essayez à nouveau";
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, register }}>
            {children}
        </AuthContext.Provider>
    );
}