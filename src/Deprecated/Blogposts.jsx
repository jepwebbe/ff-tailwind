import React from 'react'
import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { API_BASE, API_BLOGS } from '../App/AppServices/API_URL';
import { Page } from '../App/Styles/Page';
import { BlogStyle } from './Blogposts.Styled';

const Blogposts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(API_BASE + API_BLOGS, {
            headers: {
                Authorization:
                    "Bearer 019d2b15a4b2ecbfca7f77833d52aa4eaa77730fef641e6b5730056703a0fdd7e3189028c6e33c3fbd6d9d14cb1fbc2a5528e007eda6e02661807def3be9d7446dba4f5cc30b6515c80b3dc02bb027637bbb502c022fb9c19d9223bd909eed196a31ecb17ce017056f9676bd9edc38ae2f109d0ba592664cca57fc2d159ecbff"
            }
        })
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error("could not fetch the data for that resource");
                }
                return res.json();
            })
            .then(data => {
                setData(data.data);
                // console.log(data)
            })
            .catch(err => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted")
                }
            })
    }, [API_BASE + API_BLOGS])

    return (
        <Page title="blogs" description="Fine blogs">
            <BlogStyle>

                {data && data.map(post => {
                    return (
                        <article key={post.id}>
                            <Link to={post.id}><h3>{post.attributes.title}</h3></Link>
                            <p>By <span>{post.attributes.authors.data[0].attributes.author}</span></p>

                            {post.attributes.cover.data.map((imgs, idx) => {
                                console.log(API_BASE + imgs.attributes.url)
                                return (
                                    <div key={idx}>
                                        <img src={API_BASE + imgs.attributes.url} alt="" />
                                    </div>
                                )
                            })}
                        </article>
                    )
                })}
            </BlogStyle>
            <Outlet />
        </Page>

    )
}

export default Blogposts