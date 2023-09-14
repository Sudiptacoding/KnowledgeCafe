import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import Bookmark from '../Bookmark/Bookmark';
import TimeCount from '../TimeCount/TimeCount';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [bookmark, setBookmark] = useState([]);
    const [read, setRead] = useState([]);

    const [modalData, setModalData] = useState({})
    const modelHasTags = modalData.hashtags;
    const [modalTime, setModalTime] = useState({})

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false)
            })
    }, []);

    const handelBookMark = (item) => {
        const checkBookMark = bookmark.filter(p => p === item)
        if (checkBookMark.length > 0) {
            toast("Bookmark Alrady Added..")
            return
        }
        setBookmark([...bookmark, item])
    }

    // Add Mark
    const handelRead = (item, setShowBookMark, sendTime) => {
        setModalData(item);
        setModalTime(sendTime);
        my_modal_3.showModal()
        if (bookmark.length === 0) {
            toast("No Bookmark added.")
            return
        } else {
            const findData = bookmark.filter(data => data !== item)
            setBookmark(findData)
            setShowBookMark(true)
            const totalMinit = read.find(time => time === item)
            if (!totalMinit) {
                setRead([...read, item])
            }

        }
    }


    if (loading) {
        return <div className='flex items-center justify-center w-full h-screen text-white bg-gray-500'><span className="loading loading-spinner loading-lg"></span></div>
    } else {
        return (
            <div>
                <header className='flex items-center justify-between gap-6 xl:px-[320px] text-2xl px-6 py-[52px]'>
                    <h1 className='text-[#111] text-[40px] font-bold'>Knowledge Cafe</h1>
                    <img className='w-[60px] h-[60px] rounded-full' src="https://i.postimg.cc/HL8p8PNk/Ellipse-1.png" alt="" />
                </header>
                <div className='border-b mb-7 lg:mx-[320px] '></div>
                <main>
                    <div className='flex gap-6 xl:px-[320px] px-6 flex-col-reverse xl:flex-row'>
                        <div className='w-full xl:w-2/3'>
                            {
                                data.map((item, i) => <Card item={item} key={i} handelBookMark={handelBookMark} handelRead={handelRead} bookmark={bookmark}></Card>)
                            }
                        </div>
                        <div className='w-full xl:w-1/3 '>
                            <TimeCount read={read}></TimeCount>
                            <div className='bg-[#1111110D] rounded-md'>
                                <Bookmark bookmark={bookmark}></Bookmark>
                            </div>

                        </div>
                    </div>
                </main>

                <ToastContainer />
                <div>
                    <dialog id="my_modal_3" className="modal">
                        <div className="p-10 xl:w-6/12 xl:max-w-2xl modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                            </form>
                            <div>
                                <div className='mb-6'>
                                    <div>
                                        <img className='w-full' src={modalData.coverimage} alt="" />
                                    </div>
                                    <div className='flex flex-col items-center justify-between py-8 text-center lg:flex-row xl:text-left'>
                                        <div className='flex flex-col items-center gap-6 lg:flex-row'>
                                            <img className='w-[60px] h-[60px] rounded-full' src={modalData.profile} alt="" />
                                            <div>
                                                <h3 className='text-[#111] text-2xl font-bold'>{modalData.username}</h3>
                                                <p className='text-[#11111199] text-base font-semibold'>{modalData.releasetime} <br /> {` ( ${modalTime.days} Days ${modalTime.hours} Hours ${modalTime.minutes} Minutes ${modalTime.seconds} Seconds ago )`}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-[#11111199] text-xl '>{modalData.time} min read</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='text-[#111] font-bold text-[40px] '>{modalData.title}</h1>
                                    </div>
                                    <div className='flex items-center justify-start gap-3 py-4'>
                                        {
                                            modelHasTags?.map((item, i) => {
                                                return <div key={i}>
                                                    <div className='text-[#11111199] text-xl'>#{item}</div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        );
    }




};

export default Home;