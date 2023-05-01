import React from 'react';
import Slider from '../../Components/Slider/Slider';
import NavBar from '../../Components/NavBar/NavBar';
import LandingPage from '../../Components/LandingPage/LandingPage';
import Missions from '../../Components/Missions/Missions';
import Footerr from '../../Components/Footerr/Footerr';



const Home = () => {
    return (
        <div>
            {/* <NavBar></NavBar> */}

            <LandingPage></LandingPage>
            <Missions></Missions>
            {/* <Footerr></Footerr> */}
            {/* <Slider></Slider> */}
        </div>
    );
};

export default Home;