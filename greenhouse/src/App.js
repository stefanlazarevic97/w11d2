import { Switch, Route } from "react-router-dom";
import Greenhouse from "./components/Greenhouse";
import Navigation from "./components/Navigation";
import Thermometer from "./components/Thermometer";
import Hygrometer from "./components/Hygrometer";
import { useState, useEffect } from "react";
import { useClimate } from "./context/ClimateContext";

function App() {
    const { temperature, setTemperature } = useClimate();
    const [targetTemperature, setTargetTemperature] = useState(temperature);

    useEffect(() => {
        if (temperature !== targetTemperature) {
            const tempTimer = setTimeout(() => {
                setTemperature(prev => prev < targetTemperature ? prev + 1 : prev - 1);
            }, 1000);

            return () => clearTimeout(tempTimer);
        }
    }, [temperature, targetTemperature]);
    
    const { humidity, setHumidity } = useClimate();
    const [targetHumidity, setTargetHumidity] = useState(humidity);
    
    console.log(useState(humidity));
    let humidityTimer; 

    useEffect(() => {
        if ((targetHumidity - humidity) % 2 === 0) {
            if (humidity !== targetHumidity) {
                humidityTimer = setTimeout(() => {
                    setHumidity(prev => prev < targetHumidity ? prev + 2 : prev - 2);
                }, 1000);    
            }

            return () => clearTimeout(humidityTimer);
        } else {
            if (humidity !== targetHumidity - 1 || humidity !== targetHumidity + 1) {
                humidityTimer = setTimeout(() => {
                    setHumidity(prev => prev < targetHumidity ? prev + 2 : prev - 2);
                }, 1000);
            }
            
            if (humidity > targetHumidity) {
                setHumidity(prev => prev - 1);
            } else {
                setHumidity(prev => prev + 1);
            }

            return () => clearTimeout(humidityTimer);
        }
        
    }, [humidity, targetHumidity]);

    return (
        <>
        <Navigation />
        <Switch>
            <Route path="/thermometer">
                <Thermometer temperature={temperature} targetTemperature={targetTemperature} setTargetTemperature={setTargetTemperature} />
            </Route>
            <Route path="/hygrometer" >
                <Hygrometer humidity={humidity} targetHumidity={targetHumidity} setTargetHumidity={setTargetHumidity}/>
            </Route>
            <Route path="/">
                <Greenhouse />
            </Route>
        </Switch>
        </>
    );
}

export default App;