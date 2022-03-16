import React from 'react'
import Announcement from '../components/Announcement'
import Navbar1 from '../components/Navbar1'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Footer from '../components/Footer'
import {popularProducts} from '../data'

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar1 />
        <Slider />
        <Categories />
        <Products products={popularProducts} title="Más vendidos" />
        <Footer />
    </div>
  )
}

export default Home