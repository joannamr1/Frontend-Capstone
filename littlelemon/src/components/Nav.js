import '../App.css';
import logo from "../images/Logo.png"

function Nav (){
    return(
        <nav>
            <img src={logo} alt="Logo" id="logo"></img>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
        </nav>
    )
};

export default Nav;