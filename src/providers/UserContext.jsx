import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { api } from "../services/api";
import { toast } from 'react-toastify'


export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [loadingAll, setLoadingAll] = useState(false)

    const [logoutTime, setLogoutTime] = useState(false)

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

            } catch (error) {
                toast.error(error.response.data.message)
                localStorage.removeItem("@TOKEN")
                localStorage.removeItem("@USERID")
            }
        }
        if (token && id) {
            loadUser();
        }
    }, [])

    const userLogin = async (formData, setLoading) => {
        try {
            // setLoading(true)
            const { data } = await api.post("/login", formData);
            localStorage.setItem("@TOKEN", data.token);
            localStorage.setItem("@USERID", data.user.id);
            setUser(data.user);
            toast.success('Login Efetuado!')
            navigate("/home");
        } catch (error) {
            toast.error(error.response.data.message);
        }
        finally {
            setLoading(false)
        }
    };

    const userLogout = () => {
        setLogoutTime(true)
        setTimeout(() => {
            localStorage.removeItem("@TOKEN")
            localStorage.removeItem("@USERID")
            setUser(null)
            toast.success('Você foi deslogado!')
            navigate('/')
            setLogoutTime(false)
        }, 1500);
    }

    const creatUser = async (FormData, setLoading) => {
        try {
            setLoading(true)
            const { data } = await api.post('/users', FormData)
            toast.success('Cadastro realizado com sucesso!')
            navigate('/')
        } catch (error) {
            toast.error(error.response.data.message)
        }
        finally {
            setLoading(false)
        }
    }

    const editProfile = async (formData, closeEditProfileModal, setLoading) => {
        const token = localStorage.getItem("@TOKEN");
        try {
            setLoading(true)
            const { data } = await api.patch(`/users/${user.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            setUser(data)
            toast.success('Perfil editado!')
            closeEditProfileModal()
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    const formatPhone = (phone) => {
        if (phone.length === 10) {
            return `(${phone.slice(0, 2)}) ${phone.slice(2, 6)}-${phone.slice(6, 10)}`;
        } else if (phone.length === 11) {
            return `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7, 11)}`;
        } else {
            return phone;
        }
    }

    const formatInputPhone = (str) => {
        return str
            .replace(/\D/g, "")
            .replace(
                /(?:(^\+\d{2})?)(?:([1-9]{2})|([0-9]{3})?)(\d{4,5})(\d{4})/,
                (fullMatch, country, ddd, dddWithZero, prefixTel, suffixTel) => {
                    if (country)
                        return `${country} (${ddd || dddWithZero
                            }) ${prefixTel}-${suffixTel}`;
                    if (ddd || dddWithZero)
                        return `(${ddd || dddWithZero}) ${prefixTel}-${suffixTel}`;
                    if (prefixTel && suffixTel) return `${prefixTel}-${suffixTel}`;
                    return str;
                }
            );
    };

    const handlePhone = (e) => {
        e.currentTarget.maxLength = 15;
        let value = e.currentTarget.value;
        e.currentTarget.value = formatInputPhone(value);
    };

    return (
        <UserContext.Provider value={{ creatUser, userLogin, user, userLogout, editProfile, loadingAll, setLoadingAll, logoutTime, formatPhone, handlePhone, formatInputPhone }}>
            {children}
        </UserContext.Provider>
    )
};
