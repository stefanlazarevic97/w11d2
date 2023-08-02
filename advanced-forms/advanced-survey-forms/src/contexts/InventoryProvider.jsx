import React, { useState, useEffect, useContext } from "react";

export const InventoryContext = React.createContext({});
export const useInventoryContext = () => useContext(InventoryContext);

function InventoryProvider({children}) {
    const [qValues, setQValues] = useState([]);

    useEffect(() => {
        console.log('qValues:', qValues);
    }, [qValues]);

    return (
        <InventoryContext.Provider value={{qValues, setQValues}}>
            {children}
        </InventoryContext.Provider>
    )
}

export default InventoryProvider;