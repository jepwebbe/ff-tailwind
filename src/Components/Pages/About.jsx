import React from 'react'
import { Aboutman } from '../Partials/AboutBlogger'
import { AboutSlides } from '../Partials/AboutSlides'

export const About = () => {
  return (
    <section>
      <h1 className="hover:bg-beige">Om Bloggerman</h1>
      <Aboutman />
      <AboutSlides />
    </section>
  )
}
