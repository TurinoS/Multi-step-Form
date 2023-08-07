"use client";

import {
  useState,
  ReactNode,
  createContext,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from "react";

type AppContextType = {
  userName: string;
  userEmail: string;
  userPhone: string;
  handleUserName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleUserEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  handleUserPhone: (e: ChangeEvent<HTMLInputElement>) => void;
  yearly: boolean;
  arcade: boolean;
  advanced: boolean;
  pro: boolean;
  handleYearly: () => void;
  handleArcade: () => void;
  handleAdvanced: () => void;
  handlePro: () => void;
  sup: boolean;
  storage: boolean;
  profile: boolean;
  handleSup: () => void;
  handleStorage: () => void;
  handleProfile: () => void;
  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
  filledStep1: boolean;
  setFilledStep1: Dispatch<SetStateAction<boolean>>;
  filledStep2: boolean;
  setFilledStep2: Dispatch<SetStateAction<boolean>>;
  filledStep3: boolean;
  setFilledStep3: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType>({
  userName: "",
  userEmail: "",
  userPhone: "",
  handleUserName: () => {},
  handleUserEmail: () => {},
  handleUserPhone: () => {},
  yearly: false,
  arcade: false,
  advanced: false,
  pro: false,
  handleYearly: () => {},
  handleArcade: () => {},
  handleAdvanced: () => {},
  handlePro: () => {},
  sup: false,
  storage: false,
  profile: false,
  handleSup: () => {},
  handleStorage: () => {},
  handleProfile: () => {},
  price: 0,
  setPrice: () => {},
  filledStep1: false,
  setFilledStep1: () => {},
  filledStep2: false,
  setFilledStep2: () => {},
  filledStep3: false,
  setFilledStep3: () => {},
});

export function AppContextProvider({ children }: { children: ReactNode }) {
  //          ---------------  States do Step 1  ---------------
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

  //          ---------------  States do Step 3  ---------------

  const [filledStep3, setFilledStep3] = useState(false);
  const [sup, setSup] = useState(false);
  const [storage, setStorage] = useState(false);
  const [profile, setProfile] = useState(false);

  //          ---------------  States do Step 4  ---------------

  const [price, setPrice] = useState(0)

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

  //          ***************  Functions do Step 2  ***************

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

  //          ***************  Functions do Step 3  ***************

  const handleSup = () => {
    !sup ? setSup(true) : setSup(false);
  };

  const handleStorage = () => {
    !storage ? setStorage(true) : setStorage(false);
  };

  const handleProfile = () => {
    !profile ? setProfile(true) : setProfile(false);
  };

  //          ***************  Functions do Step 4  ***************

  return (
    <AppContext.Provider
      value={{
        userName,
        userEmail,
        userPhone,
        handleUserName,
        handleUserEmail,
        handleUserPhone,
        yearly,
        arcade,
        advanced,
        pro,
        handleYearly,
        handleArcade,
        handleAdvanced,
        handlePro,
        sup,
        storage,
        profile,
        handleSup,
        handleStorage,
        handleProfile,
        price,
        setPrice,
        filledStep1,
        filledStep2,
        filledStep3,
        setFilledStep1,
        setFilledStep2,
        setFilledStep3,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
