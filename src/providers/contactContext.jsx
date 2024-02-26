import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {

    const [contactList, setContactList] = useState([])
    const [contactClicked, setContactClicked] = useState({})

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN");
        const id = localStorage.getItem("@USERID");
        const loadContactData = async () => {
            try {
                const { data } = await api.get('/contacts', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                setContactList(data)
            } catch (error) {
                toast.error(error.response.data.message);
            }
        }
        loadContactData();
    }, [])

    const createContact = async (formData, setLoading, closeModal) => {
        const token = localStorage.getItem("@TOKEN");
        try {
            setLoading(true)
            const { data } = await api.post('/contacts', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            toast.success("Contato Registrado.")
            setContactList(contactList => [...contactList, data])
            closeModal()
        } catch (error) {
            toast.error(error.response.data.message);
        }
        finally {
            setLoading(false)
        }
    }

    const editContact = async (formData, contactId, closeEditContactModal, setLoadingSave) => {
        const token = localStorage.getItem("@TOKEN");

        try {
            setLoadingSave(true)
            const { data } = await api.patch(`/contacts/${contactId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            toast.success('Contato Atualizado.')
            setContactList(contactList => contactList.map(contact => {
                if (contact.id === contactId) {
                    return data
                } else {
                    return contact
                }
            }).filter(contact => {
                return Object.keys(formData).some(key => contact[key] !== undefined)
            }))
            closeEditContactModal()
        } catch (error) {
            toast.error(error.response.data.message)
        }
        finally {
            setLoadingSave(false)
        }
    }

    const deleteContact = async (contactId, closeEditContactModal, setLoadingDelet) => {
        const token = localStorage.getItem("@TOKEN");
        try {
            setLoadingDelet(true)
            await api.delete(`/contacts/${contactId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            setContactList(contactList => contactList.filter(currentContact => currentContact.id !== contactId))
            toast.success(`Contato ${contactClicked.fullname} removido(a) da lista!`)
            closeEditContactModal()
        } catch (error) {
            toast.error(error)
        }
        finally {
            setLoadingDelet(false)
        }
    }

    return (
        <ContactContext.Provider value={{ contactList, setContactList, createContact, deleteContact, setContactClicked, editContact, contactClicked }}>
            {children}
        </ContactContext.Provider>
    )
};
