import React from 'react';

const Bookmark = (props) => {
    const bookMarkList = props.bookmark
    return (
        <div>
            <h1 className='text-[#111] text-2xl font-bold px-8 pt-8'>Bookmarked Blogs : {bookMarkList.length}</h1>
            <div className='px-8 py-[30px]'>
                {
                    bookMarkList.map((bookmark, i) => {
                        return <div key={i}>
                            <h1 className='text-[#111] text-lg font-semibold py-5 px-[50px] bg-white mb-4 rounded-md'>{bookmark.title}</h1>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Bookmark;