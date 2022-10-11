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
        <footer className="bg-green grid grid-cols-3 place-items-center py-0 text-beig min-h-[5rem] text-beige">
            {data && Object.values(data).map((foot, ind) => {
                return (
                    <>
                        <ReactMarkdown className="mt-0" children={foot.SoMe} />
                        <ReactMarkdown className="mt-0" children={foot.Copyright} />
                        <ReactMarkdown className="mt-0" children={foot.Contact} />
                    </>
                )
            })}
        </footer>
    )
}