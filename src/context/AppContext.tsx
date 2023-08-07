"use client";

import { useState, ReactNode, createContext, ChangeEvent, Dispatch, SetStateAction } from "react";

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
  filledStep1: boolean;
  setFilledStep1: Dispatch<SetStateAction<boolean>>;
  filledStep2: boolean;
  setFilledStep2: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType>({
  handleUserName: () => {},
  handleUserEmail: () => {},
  handleUserPhone: () => {},
  userName: "",
  userEmail: "",
  userPhone: "",
  yearly: false,
  arcade: false,
  advanced: false,
  pro: false,
  handleYearly: () => {},
  handleArcade: () => {},
  handleAdvanced: () => {},
  handlePro: () => {},
  filledStep1: false,
  setFilledStep1: () => {},
  filledStep2: false,
  setFilledStep2: () => {},
});

export function AppContextProvider({ children }: { children: ReactNode }) {
  //          ***************  States do Step 1  ***************
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [filledStep1, setFilledStep1] = useState(false);

  //          ---------------  States do Step 2  ---------------

  const [yearly, setYearly] = useState(false);
  const [arcade, setArcade] = useState(false);
  const [advanced, setAdvanced] = useState(false);
  const [pro, setPro] = useState(false);
  const [filledStep2, setFilledStep2] = useState(false);

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
        filledStep1,
        filledStep2,
        handleUserName,
        handleUserEmail,
        handleUserPhone,
        handleYearly,
        handleArcade,
        handleAdvanced,
        handlePro,
        setFilledStep1,
        setFilledStep2,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
