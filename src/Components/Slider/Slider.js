import { Carousel } from 'flowbite-react';
import React from 'react';
import slide1 from '../../Assests/image1.jpg';
import slide2 from '../../Assests/image2.jpg';
import slide3 from '../../Assests/image3.jpg';

const Slider = () => {
    return (
        <div className=" sm:h-64 md:h-96 xl:h-96 2xl:h-96">
            <Carousel>
                <img
                    src={slide1}
                    alt="..."
                />
                <img
                    src={slide2}
                    alt="..."
                />
                <img
                    src={slide3}
                    alt="..."
                />

            </Carousel>
        </div>

    );
};

export default Slider;