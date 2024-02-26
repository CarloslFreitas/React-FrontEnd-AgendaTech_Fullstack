import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN");
        const id = localStorage.getItem("@USERID");
        const loadUser = async () => {
            try {
                const { data } = await api.get(`/users/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
                console.log(user);

            } catch (error) {
                console.log(error)
                localStorage.removeItem("@TOKEN")
                localStorage.removeItem("@USERID")
            }
        }
        if (token && id) {
            loadUser();
        }
    }, [])

    const userLogin = async (formData) => {
        try {
            const { data } = await api.post("/login", formData);
            localStorage.setItem("@TOKEN", data.token);
            localStorage.setItem("@USERID", data.user.id);
            setUser(data.user);
            navigate("/home");
        } catch (error) {
            console.error(error);
        }
    };

    const userLogout = () => {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
        setUser(null);
        navigate("/");
    }

    const creatUser = async (FormData) => {
        try {
            const { data } = await api.post('/users', FormData)
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    const editProfile = async (formData, closeEditProfileModal) => {
        const token = localStorage.getItem("@TOKEN");
        try {
            const { data } = await api.patch(`/users/${user.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            setUser(data)
            closeEditProfileModal()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UserContext.Provider value={{ creatUser, userLogin, user, userLogout, editProfile }}>
            {children}
        </UserContext.Provider>
    )
};
