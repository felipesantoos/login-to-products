import { createContext, ReactNode, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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
    const appHistory = useHistory();

    useEffect(() => {
        const userCached = localStorage.getItem("user");

        if (userCached !== null) {
            setData(JSON.parse(userCached));

            if (appHistory.location.pathname === "/login") {
                appHistory.push("/products");
            }
        } else if (appHistory.location.pathname !== "/login") {
            appHistory.push("/login");
        }
    }, []);

    function login(credentials: AuthCredentialsDTO): boolean {
        if (credentials.username.length !== 0 && credentials.password.length >= 8) {
            const newData = {
                id: 1,
                name: "Felipe",
                cpf: "713.073.664-06",
                birthDate: "2001-11-18",
            };

            setData(newData);

            localStorage.setItem("user", JSON.stringify(newData));

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
