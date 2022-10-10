import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import { Link, Outlet } from "react-router-dom"
import { API_BASE, API_BLOGS } from '../App/AppServices/API_URL';
import { Page } from '../App/Styles/Page';
import { BloglistStyle } from './Bloglist.Styled';

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
            <BloglistStyle>
                <button onClick={handleSort} >Sorter mig</button>
                {data ? 
                    data.map((blog, idx) => {
                        return (
                            <li key={idx}>
                                <div>
                                    <Link to={"/bloglist/" + blog.id}><h2>{blog.attributes.title}</h2></Link>
                                    <p className="byline">Skrevet den {blog.attributes.date}</p>
                                    <p className="byline">Af {blog.attributes.authors.data[0].attributes.author}</p>
                                    <p className="byline">På bloggen <span>{blog.attributes.blog.data.attributes.Blogname}</span></p>
                                    <ReactMarkdown children={showMore ? blog.attributes.body : `${blog.attributes.body.substring(0, 400)}`} />
                                    <button><Link to={"/bloglist/" + blog.id}>Læs indlæg</Link></button>
                                </div>
                                <img src={API_BASE + blog.attributes.cover.data[0].attributes.url} />
                            </li>
                        )

                    }) :
                    <>...Loading</>
                }
            </BloglistStyle>
        </Page>
    )
}
