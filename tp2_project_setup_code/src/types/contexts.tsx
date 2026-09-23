export interface AuthContextType {
    isAuthenticated: boolean | undefined;
    register: (email: string, pswd: string) => Promise<boolean | string>;
}