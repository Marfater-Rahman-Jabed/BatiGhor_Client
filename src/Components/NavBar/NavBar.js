import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import Logo from '../../Assests/Batighor logo.png';

const NavBar = () => {
    return (
        <div className='py-3 bg-sky-300'>
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
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}
                            bordered={true}
                            color="success" className='sm:h-6' />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/navbars"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;