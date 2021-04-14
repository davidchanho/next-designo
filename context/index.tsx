import { createContext, PropsWithChildren, useContext, useState } from "react";

type ContextProps = {
  darkMode: boolean;
  toggleDarkMode: (darkMode: boolean) => void;
};

const AppContext = createContext<ContextProps>(null);

export const AppProvider = ({ children }: PropsWithChildren<{}>) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
