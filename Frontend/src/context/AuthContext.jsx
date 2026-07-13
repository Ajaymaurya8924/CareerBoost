import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        checkUser();

    }, []);

    const checkUser = async () => {

        try {

            const res = await api.get("/auth/me");

            setUser(res.data.user);

        }
        catch (error) {

            setUser(null);

        }
        finally {

            setLoading(false);

        }

    };

    const login = (userData) => {

        setUser(userData);

    };

    const logout = async () => {

        try {

            await api.post("/auth/logout");

        }
        catch (error) {

            console.log(error);

        }

        setUser(null);

    };

    return (

        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
                checkUser
            }}
        >

            {children}

        </AuthContext.Provider>

    );

};

export const useAuth = () => useContext(AuthContext);