import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import { Link, Outlet } from "react-router-dom"
import { API_BASE, API_BLOGS } from '../App/AppServices/API_URL';

export const BlogSidebar = () => {
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
    }, [API_BASE + API_BASE])

    return (

            <ul className="sticky top-[5rem] bg-beige list-none h-[30rem] m-0 pl-[1rem] rounded-2xl">
                <h3>Seneste indlæg</h3>
                
                {data ?
                    data.slice(-5).map((blog, idx) => {
                        return (
                            <li key={idx} className="py-[1rem] px-[0] my-[auto] mx-0">
                                <Link to={"/bloglist/" + blog.id}>{blog.attributes.title}</Link>
                            </li>
                        )

                    }).reverse() :
                    <>...Loading</>
                }
            </ul>
    )
}
