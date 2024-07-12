import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../components/NavBar.css";
import logo from '../assets/images/sipnplay.png';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		
		<header>
			<a href="NavBar.jsx">
            <img src={logo} alt="Sip N Play Logo" className="navbar-logo-img" />
          </a>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Event Calendar</a>
				<a href="/#">Menu</a>
				<a href="/#">About us</a>
                <a href="/#">Reservation</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
             <div className="navbar-icons">
          <a href="https://www.instagram.com/sipnplaynyc/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.facebook.com/sipnplaynyc/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="mailto:sipnplaynyc@gmail.com">
            <FaEnvelope className="icon" />
          </a>
        </div>
		</header>

		
		
        
	);
}

export default Navbar;
