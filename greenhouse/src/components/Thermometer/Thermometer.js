import ReactSlider from "react-slider";
import './Thermometer.css';

function Thermometer({temperature, targetTemperature, setTargetTemperature}) {
    return (
        <section>
        <h2>Thermometer</h2>
        <div className="actual-temp">Actual Temperature: {temperature}°F</div>
        <ReactSlider
            value={targetTemperature}
            onAfterChange={(val) => {setTargetTemperature(val)}}
            className="thermometer-slider"
            thumbClassName="thermometer-thumb"
            trackClassName="thermometer-track"
            ariaLabel={"Thermometer"}
            orientation="vertical"
            min={0}
            max={120}
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            renderTrack={(props, state) => (
            <div {...props} index={state.index}></div>
            )}
            invert
            pearling
            minDistance={1}
        />
        </section>
    );
}

export default Thermometer;