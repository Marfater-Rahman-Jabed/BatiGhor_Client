import { Card } from 'flowbite-react';
import React from 'react';
import MissionCard from './MissionCard';



const Missions = () => {
    return (
        <div className='mt-6 '>
            <h1 className='text-4xl font-bold text-center my-10'>Our Missions</h1>
            <MissionCard></MissionCard>


        </div>
    );
};

export default Missions;