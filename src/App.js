import './App.css';
import {
    BrowserRouter,
    Switch,
    Route,
    HashRouter
} from "react-router-dom";
import CarouselComponents from "./Components/CarouselComponent"
import GoogleMapComponent from './Components/GoogleMapComponent';
import VotingSystem from './Components/VotingSystem';
import Main from './Components/Main';
import FormValidation from './Components/FormValidation';





function App() {

    return (
        <div className="App" >

            <BrowserRouter>
                <Switch>
                    <Route exact path='/' >
                        <Main/>       
                    </Route>
                    <Route path="/carousel">
                       
                        <CarouselComponents />
                    </Route>
                    <Route path="/map">
                        <GoogleMapComponent />
                    </Route>
                    <Route path="/voting">
                        <VotingSystem />
                    </Route>
                    <Route path="/form">
                        <FormValidation />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;