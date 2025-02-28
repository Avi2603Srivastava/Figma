import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import WelcomePage from '../components/welcomePage'
import Faq from '../components/faq'
import Rating from '../components/rating'

export default function ServicePage() {
  return (
   <>
   <Header/>
  <WelcomePage/>
   <Faq/>
   <Rating/>
   <Footer/>
   </>
  )
}
