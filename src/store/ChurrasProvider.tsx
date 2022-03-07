/* eslint-disable eqeqeq */
import React, { useState, ReactNode, createContext } from "react";

interface ChurrasContextProps {
  children: ReactNode;
}

interface Churrasco {
  id: number;
  name: string;
  day: string | number | Date;
  guests: [
    {
      guestId: string;
      name: string;
      value: number;
      isPayed: boolean;
    }
  ];
}

interface ChurrasContextData {
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
      return churrasco.id == churrasId;
    });

    const guests = churrasDetails?.guests.map((guest) => {
      if (guest.guestId == guestId) {
        guest.isPayed = !guest.isPayed;
      }
      return guest;
    }); // Como adicionar o ID, Data e nome do churras ??

    const updatedChurras = (churrascos[churrasId] = {
      ...churrascos,
      guests,
    });

    const newState = [...churrascos];
    newState[churrasId] = updatedChurras;
    setChurrascos(newState);

    localStorage.setItem("storagedChurrascos", JSON.stringify(newState));
  };

  return (
    <ChurrasContext.Provider value={{ churrascos, addChurras, toogleGuest }}>
      {children}
    </ChurrasContext.Provider>
  );
};

export { ChurrasProvider, ChurrasContext };
