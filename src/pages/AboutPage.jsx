import React from 'react'
import Header from '../components/header'
import About from '../components/about'
import Why from '../components/why'

import Footer from '../components/footer'
import Rating from '../components/rating'
import Blog from '../components/blog'
import Clients from '../components/clients'

export default function AboutPage() {
  return (
    <>
    <Header/>
    <About/>
    <Why />
    <Clients/>
 
    <Blog/>
    <Rating/>

    <Footer/>
   
    </>
  )
}
