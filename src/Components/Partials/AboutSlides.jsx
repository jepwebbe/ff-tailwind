import React, { useEffect, useState } from 'react'
import { API_BASE, API_BLOGS } from '../App/AppServices/API_URL';

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
    console.log(data)
    /* Below, I'm generating buttons and images. Eact has two level of mapping where I first map thorugh the blogposts and then through the images of each blogpost, to display all images of all blogposts. I also sort the second level of maps on both to display them in ascending order by id */
    return (
        <section className="max-w-[500px] sm:max-w-[600px] text-center overflow-hidden mx-[auto] mt-[3rem]">
            <h3>I'm a CSS slider of all the blogpost images</h3>
            <p>Click a link to slide</p>
            {data ?
                data.map((link) => {
                    return (
                        link && link.attributes.cover.data.sort((a, b) => a.id > b.id ? +1 : -1).map((thelink, ind) => {
                            return (
                               <a key={ind} href={"#slide-" + thelink.id} > <button className="z-100 inline-flex w-[1.5rem] h-[1.5rem] no-underline items-center justify-center rounded-[50%] mt-0 mx-0 mb-[0.5rem]">{thelink.id}</button></a>
                            )
                        })
                    )
                }) :
                <>...Loading</>
            }
            <div className="flex overflow-x-hidden snap-x scroll-smooth scrolling-touch">

                {data &&
                    data.map((blog) => {
                        return (
                            blog && blog.attributes.cover.data.sort((a, b) => a.id > b.id ? +1 : -1).map((imgs, inx) => {
                                return (
                                    <img key={inx} id={"slide-" + imgs.id} src={API_BASE + imgs.attributes.url} className="snap-start shrink-0 mr-[50px] rounded-[10px] bg-[#eee] origin-center scale-1 transition-transform-[0.5s] relative text-[100px]  w-[100%] h-[100%]" />
                                )
                            })
                        )
                    })
                }
            </div>



        </section>
    )
}

    // https://css-tricks.com/css-only-carousel/
