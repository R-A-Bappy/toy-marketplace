import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
// import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => navigate('/'))
            .catch(error => console.log(error))
    }
    return (
        <div className='bg-base-200'>
            <div className='flex justify-between items-center w-11/12 md:w-10/12 mx-auto p-2'>
                <div>
                    <Link to='/'><h2 className='text-4xl font-bold'><span className='text-orange-500'>Kids</span>-<span>Market</span><span className='text-orange-500'>.</span></h2></Link>
                </div>
                <div>
                    <ul className="md:flex hidden items-center text-xl font-medium ">
                        <li><NavLink
                            to='/'
                            className={({ isActive }) => isActive ?
                                "text-red-500 px-4 py-4" : "hover:text-red-500 px-4 py-4"
                            }
                        > Home
                        </NavLink></li>
                        <li>
                            <NavLink to="/allToy" className={({ isActive }) => isActive ? "text-red-500 px-4 py-4" : "hover:text-red-500 px-4 py-4"}> All Toy </NavLink>
                        </li>
                        <li>
                            {user && <NavLink to="/myToy" className={({ isActive }) => isActive ? "text-red-500 px-4 py-4" : "hover:text-red-500 px-4 py-4"}> My Toy </NavLink>}
                        </li>
                        <li>
                            {user && <NavLink to="/addToy" className={({ isActive }) => isActive ? "text-red-500 px-4 py-4" : "hover:text-red-500 px-4 py-4"}> Add A Toy </NavLink>}
                        </li>
                        <li><NavLink
                            to='/blog'
                            className={({ isActive }) => isActive ?
                                "text-red-500 px-4 py-4" : "hover:text-red-500 px-4 py-4"
                            }
                        > Blog
                        </NavLink></li>
                        <li>
                            {user ? <button onClick={handleLogout} className='hover:text-red-500 px-4 py-4'>Sign Out</button> : <NavLink
                                to='/login'
                                className={({ isActive }) => isActive ?
                                    "text-red-500 px-4 py-4" : "hover:text-red-500 px-4 py-4"
                                }
                            > Login
                            </NavLink>}
                        </li>
                        <li>
                            {user ?
                                <div className="px-4">
                                    <img className='rounded-full w-10' title={user?.displayName} src={user?.photoURL} />
                                </div>
                                :
                                <NavLink
                                    to='/register'
                                    className={({ isActive }) => isActive ?
                                        "text-red-500 px-4 py-4 rounded" : "hover:text-red-500 px-4 py-4 rounded"
                                    }
                                > Register
                                </NavLink>
                            }
                        </li>
                    </ul>
                    <div className='md:hidden'>
                        {/* Dropdown Open Button */}
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Bars3Icon className='w-10 text-gray-600' />
                        </button>
                        {isMenuOpen && (
                            <div className='absolute top-0 left-0 w-full z-10'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    {/* Logo & Button section */}
                                    <div className='flex items-center justify-between mb-4'>
                                        {/* Dropdown menu close button */}
                                        <div>
                                            <button
                                                aria-label='Close Menu'
                                                title='Close Menu'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <XMarkIcon className='w-5 text-gray-600' />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Mobile Nav Items Section */}
                                    <nav>
                                        <ul className='space-y-4 text-xl font-semibold'>
                                            <li>
                                                <NavLink to="/" className={({ isActive }) => isActive ? "font-bold text-xl text-red-500 " : " font-bold text-xl hover:text-red-500"}> Home </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/allToy" className={({ isActive }) => isActive ? "font-bold text-xl text-red-500 " : " font-bold text-xl hover:text-red-500"}> All Toy </NavLink>
                                            </li>
                                            <li>
                                                {user && <NavLink to="/login" className={({ isActive }) => isActive ? "font-bold text-xl text-red-500 " : " font-bold text-xl hover:text-red-500"}> My Toy </NavLink>}
                                            </li>
                                            <li>
                                                {user && <NavLink to="/addToy" className={({ isActive }) => isActive ? "font-bold text-xl text-red-500 " : " font-bold text-xl hover:text-red-500"}> Add A Toy </NavLink>}
                                            </li>
                                            <li>
                                                <NavLink to="/blog" className={({ isActive }) => isActive ? "font-bold text-xl text-red-500 " : " font-bold text-xl hover:text-red-500"}> Blog </NavLink>
                                            </li>
                                            <li>
                                                {user ? <button onClick={handleLogout} className='hover:text-red-500 font-bold text-xl'>Sign Out</button> : <NavLink to="/login" className={({ isActive }) => isActive ? "font-bold text-xl text-red-500 " : " font-bold text-xl hover:text-red-500"}> Login </NavLink>}
                                            </li>
                                            <li>
                                                {user ? <div className="">
                                                    <img className='rounded-full w-10' title={user?.displayName} src={user?.photoURL} />
                                                </div> : <NavLink to="/register" className={({ isActive }) => isActive ? "font-bold text-xl text-red-500 " : " font-bold text-xl hover:text-red-500"}> Register </NavLink>}
                                            </li>

                                        </ul>
                                    </nav>

                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
