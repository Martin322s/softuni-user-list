import { createContext, useEffect, useState } from "react";
import * as service from "../services/ContextService";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [data, setData] = useState({
        users: [],
        count: 0
    });

    const [newUser, setNewUser] = useState(false);

    useEffect(() => {
        service.getAll()
            .then(result => setData(result));
    }, [newUser]);

    const createUser = (ev, userData, closeHandler) => {
        ev.preventDefault();

        service.create(userData)
            .then(() => {
                setNewUser(true);
                closeHandler();
            });
    }

    return (
        <UserContext.Provider value={{ users: data.users, createUser }}>
            {children}
        </UserContext.Provider>
    );
}
