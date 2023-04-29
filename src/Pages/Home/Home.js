import React from 'react';
import Slider from '../../Components/Slider/Slider';
import NavBar from '../../Components/NavBar/NavBar';
import LandingPage from '../../Components/LandingPage/LandingPage';
import Missions from '../../Components/Missions/Missions';
import Footer from '../../Components/Footer/Footer';


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>

            <LandingPage></LandingPage>
            <Missions></Missions>
            <Footer></Footer>
            {/* <Slider></Slider> */}
        </div>
    );
};

export default Home;