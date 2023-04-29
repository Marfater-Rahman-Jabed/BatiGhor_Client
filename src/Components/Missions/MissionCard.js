import React from 'react';
import { Link } from 'react-router-dom';
import zakat from '../../Assests/Zakat2.jpeg';
import tree from '../../Assests/tree.jpeg';
import smart from '../../Assests/smart village.jpeg';
import education from '../../Assests/education.jpeg';

const MissionCard = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
            <div className=' mx-2 bg-slate-900 mb-4 rounded-lg'>
                <img src={tree} alt="" className='w-full  h-80 rounded-t-lg' />
                <div className='ms-6  '>
                    <h1 className='text-3xl font-bold text-slate-300 mt-6'>Tree Plantation</h1>
                    <p className='mt-6 text-slate-400 me-4'>
                        We distributed Zakat to the poor people. which is the islamic financial system. Zakat helps to improving poor people financial statement.
                    </p><br />
                    <p className='text-slate-400 me-4'>
                        It also known as  one of the pillars of the faith, it requires all Muslims to donate a portion of their wealth to charity. Muslims must meet a certain threshold before they can qualify for zakat. The amount is 2.5% or 1/40 of an individual's total savings and wealth.
                    </p>

                    <button className='mt-4 mb-6'>
                        <Link to={`https://www.hidaya.org/publications/zakat-information/`} target='__blank' className=' bg-blue-700 p-3 text-white rounded-lg'>Details About Zakat</Link>
                    </button>
                </div>
            </div>
            <div className=' mx-2 bg-slate-900 mb-4 rounded-lg'>
                <img src={smart} alt="" className='w-full  h-80 rounded-t-lg' />
                <div className='ms-6  '>
                    <h1 className='text-3xl font-bold text-slate-300 mt-6'>Rural Development</h1>
                    <p className='mt-6 text-slate-400 me-4'>
                        We distributed Zakat to the poor people. which is the islamic financial system. Zakat helps to improving poor people financial statement.
                    </p><br />
                    <p className='text-slate-400 me-4'>
                        It also known as  one of the pillars of the faith, it requires all Muslims to donate a portion of their wealth to charity. Muslims must meet a certain threshold before they can qualify for zakat. The amount is 2.5% or 1/40 of an individual's total savings and wealth.
                    </p>

                    <button className='mt-4 mb-6'>
                        <Link to={`https://www.hidaya.org/publications/zakat-information/`} target='__blank' className=' bg-blue-700 p-3 text-white rounded-lg'>Details About Zakat</Link>
                    </button>
                </div>
            </div>
            <div className=' mx-2 bg-slate-900 mb-4 rounded-lg'>
                <img src={education} alt="" className='w-full  h-80 rounded-t-lg' />
                <div className='ms-6  '>
                    <h1 className='text-3xl font-bold text-slate-300 mt-6'>Spread Education</h1>
                    <p className='mt-6 text-slate-400 me-4'>
                        We distributed Zakat to the poor people. which is the islamic financial system. Zakat helps to improving poor people financial statement.
                    </p><br />
                    <p className='text-slate-400 me-4'>
                        It also known as  one of the pillars of the faith, it requires all Muslims to donate a portion of their wealth to charity. Muslims must meet a certain threshold before they can qualify for zakat. The amount is 2.5% or 1/40 of an individual's total savings and wealth.
                    </p>

                    <button className='mt-4 mb-6'>
                        <Link to={`https://www.hidaya.org/publications/zakat-information/`} target='__blank' className=' bg-blue-700 p-3 text-white rounded-lg'>Details About Zakat</Link>
                    </button>
                </div>
            </div>
            <div className=' mx-2 bg-slate-900 mb-4 rounded-lg'>
                <img src={zakat} alt="" className='w-full  h-80 rounded-t-lg' />
                <div className='ms-6  '>
                    <h1 className='text-3xl font-bold text-slate-300 mt-6'>Zakat Distribution</h1>
                    <p className='mt-6 text-slate-400 me-4'>
                        We distributed Zakat to the poor people. which is the islamic financial system. Zakat helps to improving poor people financial statement.
                    </p><br />
                    <p className='text-slate-400 me-4'>
                        It also known as  one of the pillars of the faith, it requires all Muslims to donate a portion of their wealth to charity. Muslims must meet a certain threshold before they can qualify for zakat. The amount is 2.5% or 1/40 of an individual's total savings and wealth.
                    </p>

                    <button className='mt-4 mb-6'>
                        <Link to={`https://www.hidaya.org/publications/zakat-information/`} target='__blank' className=' bg-blue-700 p-3 text-white rounded-lg'>Details About Zakat</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MissionCard;