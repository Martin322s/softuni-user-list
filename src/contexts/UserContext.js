import { createContext, useEffect, useState } from "react";
import * as service from "../services/ContextService";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [data, setData] = useState({
        users: [],
        count: 0
    });

    useEffect(() => {
        service.getAll()
            .then(result => setData(result));
    }, [data.count]);

    return (
        <UserContext.Provider value={{ users: data.users }}>
            {children}
        </UserContext.Provider>
    );
}
