import React, { createContext, useContext, useState } from "react";

const CardContext = createContext();

export const useCardContext = () => useContext(CardContext);

export function CardProvider({ children }) {
  const [cards, setCards] = useState([]);

  return (
    <CardContext.Provider value={{ cards, setCards }}>
      {children}
    </CardContext.Provider>
  );
}