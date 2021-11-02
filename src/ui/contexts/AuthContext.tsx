import { createContext, ReactNode, useState } from "react";
import AuthCredentialsDTO from "../../core/dto/AuthCredentialsDTO";
import User from "../../core/models/User";

interface AuthContextProps {
    data: undefined | User;
    login(credentials: AuthCredentialsDTO): boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps) {
    const [data, setData] = useState<User>();

    function login(credentials: AuthCredentialsDTO): boolean {
        if (credentials.username.length !== 0 && credentials.password.length >= 8) {
            setData({
                id: 1,
                name: "Felipe",
                cpf: "713.073.664-06",
                birthDate: "2001-11-18",
            });

            return true;
        }

        return false;
    }

    return (
        <AuthContext.Provider value={{ data, login }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
