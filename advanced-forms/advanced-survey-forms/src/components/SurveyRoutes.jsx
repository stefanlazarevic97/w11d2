import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom/cjs/react-router-dom.min.js';

import Home from './Home.jsx';
import Inventory from './Inventory.jsx';
import InventoryReport from './InventoryReport.jsx';
import SampleSurvey from './SampleSurvey.jsx';

function SurveyRoutes() {
    return (
        <BrowserRouter>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/sample">Sample</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/report">Report</NavLink>
            </div>

            <Switch>
                <Route path="/sample">
                    <SampleSurvey />
                </Route>

                <Route path="/inventory">
                    <Inventory />
                </Route>               
                
                <Route path="/report">
                    <InventoryReport />
                </Route>
                
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default SurveyRoutes;