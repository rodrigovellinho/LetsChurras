/* eslint-disable eqeqeq */
import React, { useState, ReactNode, createContext } from "react";

interface ChurrasContextProps {
  children: ReactNode;
}

export interface Churrasco {
  id: number;
  name: string;
  day?: string;
  guests: {
    guestId: string;
    name: string;
    value: number;
    isPayed: boolean;
  }[];
}

export interface ChurrasContextData {
  churrascos: Churrasco[];
  addChurras: (churrasco: Churrasco) => void;
  toogleGuest: (churrasId: string, guestId: string) => void;
}

const ChurrasContext = createContext<ChurrasContextData>(
  {} as ChurrasContextData
);

const ChurrasProvider = ({ children }: ChurrasContextProps): JSX.Element => {
  const [churrascos, setChurrascos] = useState<Churrasco[]>(() => {
    const storagedChurrascos = localStorage.getItem("storagedChurrascos");

    if (storagedChurrascos) {
      return JSON.parse(storagedChurrascos);
    }

    return [];
  });

  const addChurras = (churrasco: Churrasco): void => {
    const newState = [...churrascos, churrasco];
    setChurrascos(newState);

    localStorage.setItem("storagedChurrascos", JSON.stringify(newState));
  };

  const toogleGuest = (churrasId: string, guestId: string): void => {
    var churrasDetails = churrascos.find((churrasco) => {
      return churrasco.id === Number(churrasId);
    });

    const { guests } = churrasDetails;

    const newGuests = guests.map((guest) => {
      if (guest.guestId === guestId) {
        return { ...guest, isPayed: !guest.isPayed };
      }
      return guest;
    }); // Como adicionar o ID, Data e nome do churras ??

    const newChurrasState = churrascos.map((churras) => {
      if (churras.id === Number(churrasId)) {
        return { ...churras, guests: newGuests };
      }
      return churras;
    });

    setChurrascos(newChurrasState);

    localStorage.setItem("storagedChurrascos", JSON.stringify(newChurrasState));
  };

  return (
    <ChurrasContext.Provider value={{ churrascos, addChurras, toogleGuest }}>
      {children}
    </ChurrasContext.Provider>
  );
};

export { ChurrasProvider, ChurrasContext };
