import React from 'react'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown';
import { API_BASE } from '../App/AppServices/API_URL';



export const Footer = () => {
    const [data, setData] = useState([]);
    const FooterEndpoint = `/api/footer`

    useEffect(() => {
        fetch(API_BASE + FooterEndpoint)
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
    }, [API_BASE + FooterEndpoint])

    return (
        <>
            {data && Object.values(data).map((foot, ind) => {
                return (
                    <>
                        <ReactMarkdown children={foot.SoMe}/>
                        <ReactMarkdown children={foot.Copyright}/>
                        <ReactMarkdown children={foot.Contact}/>
                    </>
                )
            })}
        </>
    )
}