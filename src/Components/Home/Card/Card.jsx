import React, { useState } from 'react';



const Card = ({ item, handelBookMark, handelRead, bookmark }) => {
    const { coverimage, hashtags, id, profile, releasetime, time, title, username } = item;
    const [showBookMark, setShowBookMark] = useState(true)
    const targetDate = new Date(releasetime);
    const currentDate = new Date();
    const timeDifference = currentDate - targetDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const functionLode = (item) => {
        handelBookMark(item)
        setShowBookMark(false)
    }
    const sendTime = { days, hours, minutes, seconds }




    return (
        <div className='mb-6 border-b'>
            <div>
                <img className='w-full' src={coverimage} alt="" />
            </div>
            <div className='flex flex-col items-center justify-between py-8 text-center xl:text-left xl:flex-row lg:flex-row'>
                <div className='flex flex-col items-center justify-center gap-6 lg:flex-row'>
                    <img className='w-[60px] h-[60px] rounded-full' src={profile} alt="" />
                    <div>
                        <h3 className='text-[#111] text-2xl font-bold'>{username}</h3>
                        <p className='text-[#11111199] text-base font-semibold'>{releasetime} {` ( ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds ago )`}</p>
                    </div>
                </div>
                <div>
                    <p className='text-[#11111199] text-xl '>{time} min read <span className='ml-4' onClick={() => functionLode(item)}> {showBookMark ? <i id='bookmark' className="fa-regular fa-bookmark"></i> : <i className="fa-solid fa-bookmark"></i>}</span> </p>
                </div>
            </div>
            <div>
                <h1 className='text-[#111] font-bold text-[40px] lg:w-[737px]'>{title}</h1>
            </div>
            <div className='flex items-center justify-start gap-3 py-4'>
                {
                    hashtags.map((item, i) => {
                        return <div key={i}>
                            <div className='text-[#11111199] text-xl'>#{item}</div>
                        </div>
                    })
                }
            </div>
            <div className='pb-7'>
                <p className='text-[#6047EC] underline font-semibold text-xl cursor-pointer' onClick={() => handelRead(item, setShowBookMark, sendTime)}>Mark as read</p>
            </div>
        </div>
    );
};

export default Card;