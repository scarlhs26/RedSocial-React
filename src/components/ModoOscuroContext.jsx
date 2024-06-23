import React, { createContext, useContext, useState } from 'react';

const ModoOscuroContext = createContext();

export const ModoOscuroProvider = ({ children }) => {
  const [modoOscuro, setModoOscuro] = useState(false);

  const toggleModoOscuro = () => {
    setModoOscuro((prevModoOscuro) => !prevModoOscuro);
  };

  return (
    <ModoOscuroContext.Provider value={{ modoOscuro, toggleModoOscuro }}>
      {children}
    </ModoOscuroContext.Provider>
  );
};

export const useModoOscuro = () => {
  return useContext(ModoOscuroContext);
};

