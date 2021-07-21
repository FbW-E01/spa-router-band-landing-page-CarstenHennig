import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
    return <ul className="navigation">
        <li><NavLink to="/bjoern">Bjoern</NavLink></li>
        <li><NavLink to="/benny">Benny</NavLink></li>
        <li><NavLink to="/agnetha">Agnetha</NavLink></li>
        <li><NavLink to="/frida">Anni-Frid 'Frida'</NavLink></li>
    </ul>
}