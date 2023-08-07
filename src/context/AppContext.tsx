"use client";

import { useState, ReactNode, createContext, ChangeEvent } from "react";

type AppContextType = {
  handleUserName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleUserEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  handleUserPhone: (e: ChangeEvent<HTMLInputElement>) => void;
  userName: string;
  userEmail: string;
  userPhone: string;
  yearly: boolean;
  arcade: boolean;
  advanced: boolean;
  pro: boolean;
  handleYearly: () => void;
  handleArcade: () => void;
  handleAdvanced: () => void;
  handlePro: () => void;
};

export const AppContext = createContext<AppContextType>({
  handleUserName: () => {},
  handleUserEmail: () => {},
  handleUserPhone: () => {},
  userName: '',
  userEmail: '',
  userPhone: '',
  yearly: false,
  arcade: false,
  advanced: false,
  pro: false,
  handleYearly: () => {},
  handleArcade: () => {},
  handleAdvanced: () => {},
  handlePro: () => {},
});

export function AppContextProvider({ children }: { children: ReactNode }) {
  //          ***************  States do Step 1  ***************
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  //          ---------------  States do Step 2  ---------------

  const [yearly, setYearly] = useState(false);
  const [arcade, setArcade] = useState(false);
  const [advanced, setAdvanced] = useState(false);
  const [pro, setPro] = useState(false);

  //          ***************  Functions do Step 1  ***************

  const handleUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleUserEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };

  const handleUserPhone = (e: ChangeEvent<HTMLInputElement>) => {
    setUserPhone(e.target.value);
  };

  //          ---------------  Functions do Step 2  ---------------

  const handleYearly = () => {
    yearly ? setYearly(false) : setYearly(true);
  };

  const handleArcade = () => {
    setArcade(true);
    setAdvanced(false);
    setPro(false);
  };

  const handleAdvanced = () => {
    setArcade(false);
    setAdvanced(true);
    setPro(false);
  };

  const handlePro = () => {
    setArcade(false);
    setAdvanced(false);
    setPro(true);
  };

  return (
    <AppContext.Provider
      value={{
        userName,
        userEmail,
        userPhone,
          yearly,
          arcade,
          advanced,
          pro,
        handleUserName,
        handleUserEmail,
        handleUserPhone,
        handleYearly,
        handleArcade,
        handleAdvanced,
        handlePro,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
