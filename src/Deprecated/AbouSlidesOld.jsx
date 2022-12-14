import React, { useEffect, useState } from 'react'
import { API_BASE, API_BLOGS } from '../App/AppServices/API_URL';
// Maps thorugh the first image of each blogpost, where as the active AboutSlides maps through first the blogposts and then the images of each blogpost, thus displaying all the images
export const AboutSlides = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(API_BASE + API_BLOGS)
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data.data);
                // console.log(data)
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                }
            })
    }, [API_BASE])

    return (
        <div className="w-[500px] text-center overflow-hidden">
             {data ?
                    data.map((link, ind) => {
                        return (
                            <a key={ind} href={"#slide-"+link.id} className="z-100 active:top-[1] inline-flex w-[1.5rem] h-[1.5rem] bg-blue text-white no-underline items-center justify-center rounded-[50%] mt-[0] mx-0 mb-[0.5rem] relative">{link.id}</a>
                        )

                    }) :
                    <>...Loading</>
                }
  
            <div className="flex overflow-x-auto snap-x scroll-smooth scrolling-touch">

                {data &&
                    data.map((blog, idx) => {
                        return (
                                <img key={idx} id={"slide-" + blog.id} className="snap-start shrink-0 w-[300px] h-[300px] mr-[50px] rounded-[10px] bg-[#eee] origin-center scale-1 transition-transform-[0.5s] relative flex justify-center items-center text-[100px] object-cover absolute top-0 left-0 w-[100%] h-[100%]" src={API_BASE + blog.attributes.cover.data[0].attributes.url} />
                        )

                    })
                }
            </div>



        </div>
    )
}