import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
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
                console.log(error);
            }
        }
        loadContactData();
    }, [])

    const createContact = async (formData) => {
        const token = localStorage.getItem("@TOKEN");
        try {
            const { data } = await api.post('/contacts', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            setContactList(contactList => [...contactList, data])
        } catch (error) {
            console.log(error);
        }
    }

    const editContact = async (formData, contactId, closeEditContactModal) => {
        const token = localStorage.getItem("@TOKEN");

        try {
            const { data } = await api.patch(`/contacts/${contactId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
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
            console.log(error)
        }
    }

    const deleteContact = async (contactId, closeEditContactModal) => {
        const token = localStorage.getItem("@TOKEN");
        try {
            await api.delete(`/contacts/${contactId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            setContactList(contactList => contactList.filter(currentContact => currentContact.id !== contactId))
            closeEditContactModal()
        } catch (error) {

        }
    }

    return (
        <ContactContext.Provider value={{ contactList, setContactList, createContact, deleteContact, setContactClicked, editContact, contactClicked }}>
            {children}
        </ContactContext.Provider>
    )
};
