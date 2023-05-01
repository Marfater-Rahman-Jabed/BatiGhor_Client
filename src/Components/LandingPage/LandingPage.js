import React from 'react';
import bgimage from '../../Assests/image1.jpg'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (


        <section className="bg-center bg-no-repeat lg:h-[656px] md:h-[656px] sm:h-[200px] bg-slate-500 bg-blend-multiply" style={
            { backgroundImage: `url(${bgimage})`, backgroundSize: "cover" }}>
            <div className="px-4 mx-auto   text-center py-24 lg:py-56">
                <h1 className="mb-4 md:mt-36 lg:mt-36   text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We Can Change the World Together</h1>
                <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48 lg:block md:block sm:hidden ">Our world is a beautiful place and it has sustained everything living on it for millions of years</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Link to="/secondHome" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Get Explore
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                    <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-orange-500 focus:ring-4 focus:ring-gray-400">
                        Learn more
                    </a>
                </div>
            </div>
        </section>


    );
};

export default LandingPage;