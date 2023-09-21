import { useRef } from "react";
import { FaBars, FaTimes,FaStream, } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
import "../Style/main.css";

function Navbar() {
	const navRef = useRef();
    const sideRef= useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
    };    
	const showSidebar = () => {
		sideRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header className="grid grid-cols-1">
			<nav ref={navRef} className="text-2xl mx-auto pt-4 gap-20 " >
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/blog">Blog</a>
				<a href="/contact">Contact</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
            <sidebar ref={sideRef} className="lg:hidden bg-gray-400" >
                <button
					className="side-btn side-close-btn"
					onClick={showSidebar}>
					<FaTimes />
				</button>
                <Sidebar></Sidebar>
            </sidebar>
			<div className="flex justify-between">
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                        <div className="flex gap-2 text-xl font-semibold">
                            <h3>Menu</h3>
                            <FaBars />
                        </div>
                </button>
                <button
                    className="nav-btn"
                    onClick={showSidebar}>
                        <div className="flex gap-2 text-xl font-semibold">
                            <h3>Sidebar</h3>
                            <FaStream />
                        </div>
                </button>
            </div>
		</header>
	);
}

export default Navbar;