'use client'

import { useState ,ReactNode, createContext, ChangeEvent } from "react";

type AppContextType = {
    handleUserName: (e: ChangeEvent<HTMLInputElement>) => void;
    handleUserEmail: (e: ChangeEvent<HTMLInputElement>) => void;
    handleUserPhone: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const AppContext = createContext<AppContextType>({
    handleUserName: () => {},
    handleUserEmail: () => {},
    handleUserPhone: () => {},
})

export function AppContextProvider({ children }: { children: ReactNode }) {
    const [userName, setUserName] = useState<string>('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');

    const handleUserName = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }

    const handleUserEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value);
    }

    const handleUserPhone = (e: ChangeEvent<HTMLInputElement>) => {
        setUserPhone(e.target.value);
    }
    
    return(
        <AppContext.Provider value={{ handleUserName, handleUserEmail, handleUserPhone }}>
            {children}
        </AppContext.Provider>
    )
} 