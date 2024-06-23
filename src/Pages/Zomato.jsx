import React from 'react'
import { Link } from 'react-router-dom'
import "../app.scss"
import Header from '../Components/Header/Header'
import Card from '../Components/Card/Card'
import Collection from '../Components/Collections/Collection'
import Cities from '../Components/Cities/Cities'
import CTA from '../Components/CTA/CTA'
import AccContainer from '../Components/AccContainer/AccContainer'
import Footer from '../Components/Footer/Footer'

const Zomato = () => {
  return (
    <div>    
        <Header />
      <Card />
      <Collection />
      <Cities />
      <CTA />
      <AccContainer />
      <Footer />
    </div>
  )
}

export default Zomato