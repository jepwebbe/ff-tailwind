import React, { useEffect, useState } from 'react'
import { API_BASE } from '../App/AppServices/API_URL';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(
    {
      name: "",
      email: "",
      blog: {
            id: "" 
      },
      message: "",
    }
  )
  // Updates the state whenever anything is written in the input field
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
        // [name]: type === "checkbox" ? checked : value

      }
    })
  }
  // Fetches data from Strapi to display a selection of blogs 
  useEffect(() => {
    fetch(API_BASE + "/api/blogs")
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        setData(data.data);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        }
      })
  }, [API_BASE])

  // Uses Axios to post the formdata from the state to Strapi
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(API_BASE + "/api/forminfos?populate=*", {
      data: formData
    })
      .then(response => {
        this.setState({})
        console.log(response.data)
      })

      .catch(error => error);


    if (!data) return
    navigate("/thanks")
  }
  return (
    <section>
      <h1>Kontakt</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">

        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={formData.name}
          placeholder="Dit navn"
          required />
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={formData.email}
          placeholder="Din email"
          required />
        <label>
          Hvilken blog handler det om?</label>
        <select
          name="blog"
          onChange={handleChange}
          value={formData.blog.id}>
          {data.map((blog, idx) => {
            return (
              <option key={idx}
                value={blog.id}>
                {blog.attributes.Blogname}</option>
            )
          })}
        </select>
        <textarea
          name="message"
          onChange={handleChange}
          rows="10"
          value={formData.message}
          placeholder="Din besked"
          required />

        <button className="button" type="submit">Send</button>
      </form>
    </section>
  )
}

export default Contact