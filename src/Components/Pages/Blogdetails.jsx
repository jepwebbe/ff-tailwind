import React from 'react'
import { useEffect, useState } from "react"
import ReactMarkdown from 'react-markdown';
import { useParams } from "react-router-dom"
import { API_BASE, API_BLOGS } from '../App/AppServices/API_URL';
import LightBox from '../App/Lightbox/Lightbox';

export const Blogdetails = () => {
    const [apiData, setApiData] = useState("");
    const { id } = useParams();

    // variable to hide text
    const [showMore, setShowMore] = useState(false)

// fetches data and returns a json and returns in state apiData
    const getData = () => {
        fetch(API_BASE + "/api/blogposts/" + id + "?populate=*")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setApiData(data.data)
            })
    }
    useEffect(() => {
        getData();
        console.log(apiData)
    }, [id])

    return (
        <article key={apiData.id} className="border-solid bg-beige p-[1rem] text-justify">
            <h2>{apiData && apiData.attributes.title}</h2>
            <p>By {apiData && apiData.attributes.authors.data[0].attributes.author}</p>
            <div className="grid grid-cols-3 gap-[1rem] place-items-center">
                {apiData && apiData.attributes.cover.data.map((imgs, idx) => {
                    console.log(API_BASE + imgs.attributes.url)
                    return (
                        <LightBox key={idx} src={API_BASE + imgs.attributes.url}>
                            <img className="block mw-[80%] h-[auto] my-o mx-[auto]" src={API_BASE + imgs.attributes.url} alt={imgs.attributes.alternativeText} />
                        </LightBox>
                    )
                })}
            </div>
            {/* ReactMarkDown turns markdown into html, showMore hides all characters after 2000 and creates a button to show/hide text */}
            <article><ReactMarkdown children={showMore ? apiData && apiData.attributes.body : `${apiData && apiData.attributes.body.substring(0, 2000)}`} />
            <button onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Read more"}</button>
            </article>

        </article>
    )
}