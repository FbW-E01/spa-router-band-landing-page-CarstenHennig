import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Home from './pages/Home';
import Bjoern from './pages/Bjoern';
import Benny from './pages/Benny';
import Agnetha from './pages/Agnetha';
import Frida from './pages/Frida';
// import Error from './pages/Error';
import './App.css';

export default function App() {
    return (
        <div>
            <Home />
            <hr />
            <Switch>
                <Route path="/frida">
                    <Frida />
                </Route>
                <Route path="/agnetha">
                    <Agnetha />
                </Route>
                <Route path="/benny">
                    <Benny />
                </Route>
                <Route path="/bjoern">
                    <Bjoern />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        <Navigation />

   </div> 
    );
}