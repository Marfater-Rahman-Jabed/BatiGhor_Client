import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import Logo from '../../Assests/Batighor logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Context';

const NavBar = () => {
    const { user, LogOut } = useContext(AuthContext);
    const handleLogOut = () => {
        LogOut()
            .then(() => {
                console.log('loggeeeed out')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='pt-3 bg-sky-300'>
            <Navbar
                fluid={true}
                rounded={true}
                className='bg-sky-300'
            >
                <Navbar.Brand href="/">
                    <img
                        src={Logo}
                        className="mr-2 h-20 md:h-16 sm:h-6 rounded-full"
                        alt="BatiGhor Logo"
                    />
                    <span className="self-center whitespace-nowrap text-4xl font-semibold text-yellow-900 dark:text-white">
                        BatiGhor
                    </span>
                </Navbar.Brand>

                <div className="flex md:order-2">

                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={user?.photoURL ? <Avatar alt="User settings" img={user?.photoURL} rounded={true}
                            bordered={true}
                            color="success" className='sm:h-6' /> : <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}
                                bordered={true}
                                color="success" className='sm:h-6' />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {user?.displayName}
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {user?.email}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>

                        {/* <Dropdown.Divider /> */}
                        <Dropdown.Item>
                            <Link to='/register'> Register</Link>
                        </Dropdown.Item>
                        {user ?
                            <Dropdown.Item>
                                <button onClick={handleLogOut}>Sign out</button>
                            </Dropdown.Item> :
                            <Dropdown.Item>
                                <Link to='/login'> Sign In</Link>
                            </Dropdown.Item>}
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Link
                        to="/"
                        active={true}
                    >
                        Home
                    </Link>
                    <Link to="/about">
                        About
                    </Link>
                    <Link to="/service">
                        Services
                    </Link>
                    <Link to="/pricing">
                        Pricing
                    </Link>
                    <Link to="/contact">
                        Contact
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;