import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ActivitiesCard = ({ ActivityName, image, link }) => {
    return (

        <div className="max-w-sm">
            <Card imgSrc={image} >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {ActivityName}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <button className='btn bg-blue-700 py-3 rounded-lg text-white font-bold'><Link to={link} >See Details</Link></button>
            </Card>
        </div>

    );
};

export default ActivitiesCard;