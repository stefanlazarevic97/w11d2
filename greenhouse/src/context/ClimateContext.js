import { createContext, useContext, useState } from "react";

const ClimateContext = createContext();

export const ClimateProvider  = ({children}) => { 
    const [temperature, setTemperature] = useState(50); // Temperature has a default value of 50 degrees
    const [humidity, setHumidity] = useState(40); // Humidity has a default value of 40%
    
    return(
        <ClimateContext.Provider
            value={{
                temperature,
                setTemperature,
                humidity,
                setHumidity
            }}>
            {children}
        </ClimateContext.Provider>
    );
}

export function useClimate() { 
    return useContext(ClimateContext);
}