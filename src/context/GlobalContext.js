import React, {createContext, useContext, useState} from 'react';

const GlobalContext = createContext({});

const GlobalContextProvider = ({children}) => {
    const [isAddPortfolioModalOpen,setIsAddPortfolioModalOpen] = useState(false);

    const toggleIsAddPortfolioModalOpen = () => {
      setIsAddPortfolioModalOpen(!isAddPortfolioModalOpen);
    }

    return (
        <GlobalContext.Provider value={{
            isAddPortfolioModalOpen,
            toggleIsAddPortfolioModalOpen
        }}>
            {
                children
            }

        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContextProvider;