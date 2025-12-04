import React from 'react';

const Hero = () => {
    return (
        <div className='container mx-auto font mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='rounded-xl py-20 text-white bg-red-800'>
                    <h3 className='text-xl font-bold text-center'>Pending</h3>
                    <p className='mt-4 text-3xl font-bold text-center'>0</p>
                </div>
                <div className='rounded-xl py-20 text-white bg-green-800'>
                    <h3 className='text-xl font-bold text-center'>Submited</h3>
                    <p className='mt-4 text-3xl font-bold text-center'>0</p>
                </div>
                <div className='rounded-xl py-20 text-white bg-blue-800'>
                    <h3 className='text-xl font-bold text-center'>Reviewed</h3>
                    <p className='mt-4 text-3xl font-bold text-center'>0</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;