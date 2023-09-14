import React from 'react';

const TimeCount = (props) => {
    const totalTime = props.read;
    const array = totalTime.map((total) => total.time)
    const totalMinits = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return (
        <div className='bg-[#6047EC1A] rounded-md py-5 px-12 text-center mb-5'>
            <h1 className='text-2xl font-bold text-[#6047EC]'>Spent time on read : {totalMinits} min</h1>
        </div>
    );
};

export default TimeCount;