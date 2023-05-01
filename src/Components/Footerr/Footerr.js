import { Footer } from 'flowbite-react';
import React from 'react';
import Logo from '../../Assests/Batighor logo.png'

const Footerr = () => {
    return (
        <div className=''>
            <Footer container={true} className='bg-slate-700'>
                <div className="w-full text-center ">
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between pt-4">
                        <Footer.Brand
                            href="/"
                            className='rounded-full text-white'
                            src={Logo}
                            alt="Flowbite Logo"
                            name="BatiGhor"

                        />
                        <Footer.LinkGroup className=''>
                            <Footer.Link href="#" className='font-bold text-white'>
                                About
                            </Footer.Link>
                            <Footer.Link href="#" className='font-bold text-white'>
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link href="#" className='font-bold text-white'>
                                Licensing
                            </Footer.Link>
                            <Footer.Link href="#" className='font-bold text-white'>
                                Contact
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <Footer.Divider />
                    <Footer.Copyright
                        href="#"
                        by="BatiGhor™"
                        year={2022}
                        className='text-white font-semibold'
                    />
                </div>
            </Footer>
        </div>
    );
};

export default Footerr;