import React from 'react'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { HeroBanner } from '../components/herbanner/HeroBanner'
import SideBar from '../components/sidebar/SideBar'
import Shopping from '../components/shoppingcard/Shopping'

export const Home = () => {
  return (
    <>
    <Header/>
    <SideBar/>
    <HeroBanner/>
    <Shopping/>
    <Footer/>
    </>
  )
}
