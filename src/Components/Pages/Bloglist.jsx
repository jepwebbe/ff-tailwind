import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import { Link, Outlet } from "react-router-dom"
import { API_BASE, API_BLOGS } from '../App/AppServices/API_URL';
import { Page } from '../App/Styles/Page';

export const Bloglist = () => {
    const [data, setData] = useState([]);

    const [showMore, setShowMore] = useState(false)


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

    const handleSort = () => {
        const sortedData = [...data].sort((a,b) => {
            return a.id > b.id ? 1 : -1
        })
        setData(sortedData)
        console.log(sortedData)
      }
    return (
        <Page title="The blogs page" description="the page of blogs">
            <ul className="list-none rounded-2xl py-0 px-1rem mt-0">
                <button onClick={handleSort} >Sorter mig</button>
                {data ? 
                    data.map((blog, idx) => {
                        return (
                            <li key={idx} className="flex flex-col text-center mx-[auto] mt-0 mb-[1rem] place-items-center bg-beige rounded-2xl p-[1rem]">
                                <div className="order-2">
                                    <Link to={"/bloglist/" + blog.id}><h2>{blog.attributes.title}</h2></Link>
                                    <p className="text-[0.7rem] italic m-[0.3rem] m-[0.3rem] text-justify py-0 px-[1rem]">Skrevet den {blog.attributes.date}</p>
                                    <p className="text-[0.7rem] italic m-[0.3rem] m-[0.3rem] text-justify py-0 px-[1rem]">Af {blog.attributes.authors.data[0].attributes.author}</p>
                                    <p className="text-[0.7rem] italic m-[0.3rem] m-[0.3rem] text-justify py-0 px-[1rem]">På bloggen <span>{blog.attributes.blog.data.attributes.Blogname}</span></p>
                                    <ReactMarkdown className="text-justify py-0 px-[1rem]" children={showMore ? blog.attributes.body : `${blog.attributes.body.substring(0, 400)}`} />
                                    <button><Link className="no-underline" to={"/bloglist/" + blog.id}>Læs indlæg</Link></button>
                                </div>
                                <img className="max-h-[200px] w-[auto] block order-1" src={API_BASE + blog.attributes.cover.data[0].attributes.url} />
                            </li>
                        )

                    }) :
                    <>...Loading</>
                }
            </ul>
        </Page>
    )
}
