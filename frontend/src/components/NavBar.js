import '../styles/index.css';
import { Link } from 'react-router-dom'
import logo from '../assets/TempLogo.png'

export default function NavBar(props) {
    return (
        <div className="navbar-container">
            <div className="logo-container">
                <div className="logo"></div>
            </div>
            <span className="navbar-button-container">
                <Link to="/signup">
                    <button className="filled-button"> SIGN UP</button>
                    <button className="empty-button">LOG IN</button>
                </Link>
            </span>
        </div>
    );
}
