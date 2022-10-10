import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import { Link, Outlet } from "react-router-dom"
import { API_BASE, API_BLOGS } from '../App/AppServices/API_URL';
import { Page } from '../App/Styles/Page';
import { HomeStyle } from './Home.Styled';

export const Home = () => {
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

    return (
        <Page title="The page of home" description="Home is where the home is">
            <HomeStyle>
                {data ?
                    data.slice(0, 2).map((blog, idx) => {
                        return (
                            <article key={idx}>
                                <div>
                                    <Link to={"/bloglist/" + blog.id}><h2>{blog.attributes.title}</h2></Link>
                                    <p className="byline">Skrevet den {blog.attributes.date}</p>
                                    <p className="byline">Af {blog.attributes.authors.data[0].attributes.author}</p>
                                    <ReactMarkdown children={showMore ? blog.attributes.body : `${blog.attributes.body.substring(0, 400)}`} />
                                    <button><Link to={"/bloglist/" + blog.id}>Læs indlæg</Link></button>
                                </div>
                                <img src={API_BASE + blog.attributes.cover.data[0].attributes.url} />
                            </article>
                        )

                    }) :
                    <>...Loading</>
                }
            </HomeStyle>
        </Page>
    )
}
