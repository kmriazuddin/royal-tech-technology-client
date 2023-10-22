import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
        .then()
        .catch()
    }
    const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/a">A</NavLink></li>
    <li><NavLink to="/allproducts">All Products</NavLink></li>
    <li><NavLink to="/userpost">User Post</NavLink></li>
    <li><NavLink to="/support">Support</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-60">
                        {navLinks}
                    </ul>
                </div>
                <NavLink><img className="w-28 " src="https://i.ibb.co/Tt13HMq/Modern-Creative-Technology-Logo-prev-ui-1.png" alt="" /></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
            {
                    user ? <button onClick={handleSignOut} className="btn btn-outline btn-secondary">Sign Out</button> : <Link to="/login"><button className="btn btn-outline btn-secondary">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;