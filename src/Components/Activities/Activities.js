import React from 'react';
import ActivitiesCard from './ActivitiesCard';
import Eid from '../../Assests/Eid2.jpeg';
import Zakat from '../../Assests/Zakat4.jpeg'
import Education from '../../Assests/Education2.jpeg'
import tree from '../../Assests/tree2.jpeg'
import tour from '../../Assests/tour.jpeg'
import social from '../../Assests/social2.jpeg'
const Activities = () => {
    return (
        <div>
            <h1 className='text-4xl text-center font-bold my-6'>Our Activities</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4 my-4'>
                <ActivitiesCard ActivityName={'Eid Activity'} image={Eid} link={'/eid'}></ActivitiesCard>
                <ActivitiesCard ActivityName={'Zakat Activity'} image={Zakat} link={'/zakat'}></ActivitiesCard>
                <ActivitiesCard ActivityName={'Education Activity'} image={Education} link={'/education'}></ActivitiesCard>
                <ActivitiesCard ActivityName={'Tree Plantation Activity'} image={tree} link={'/tree'}></ActivitiesCard>
                <ActivitiesCard ActivityName={'Tours Activity'} image={tour} link={'/tour'}></ActivitiesCard>
                <ActivitiesCard ActivityName={'Health & Social Activity'} image={social} link={'/social'}></ActivitiesCard>
            </div>
        </div>
    );
};

export default Activities;