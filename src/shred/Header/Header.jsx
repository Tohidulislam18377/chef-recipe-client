import { Link } from "react-router-dom";
import './Header.css'
import logo from '../../assets/images/Chef.png'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.log(error.message))
    }
    return (
        <div>
            <div className="nav-container">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li className="mr-1"><Link className="text-2xl font-medium" to={'/'}>Home</Link></li>
                                <li className="mr-1">
                                    <Link className="text-1xl font-medium" to={'/blog'}>Blog</Link>
                                </li>
                                <li><Link className="text-1xl font-medium">Contact</Link></li>
                            </ul>
                        </div>
                        <Link to={'/'}><img title="Home" className="h-12 ml-8" src={logo} alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className=" menu-horizontal">
                            <li className="mr-4 hover:bg-[#ffeded] pl-1 pr-1 pt-1 pb-1 rounded-xl"><Link className="text-[22px]" to={'/'}>Home</Link></li>
                            <li className="mr-4 hover:bg-[#ffeded] pl-1 pr-1 pt-1 pb-1 rounded-xl">
                                <Link className="text-[22px] " to={'/blog'}>Blog</Link>
                            </li>
                            <li className="hover:bg-[#ffeded] pl-1 pr-1 pt-1 pb-1 rounded-xl"><Link to={'/contact'} className="text-[22px]">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user ? <><button className="login-section pl-3 pr-3 text-white pt-1 pb-2 text-center rounded-full text-1xl mr-6" onClick={handelLogOut}>SingOut</button></> : <Link className="login-section pl-5 pr-5  text-white pt-1 pb-2 text-center rounded-full text-1xl mr-8" to={'/login'}>Login</Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;