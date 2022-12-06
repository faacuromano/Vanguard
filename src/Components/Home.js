import React from 'react'
import { Fragment } from 'react'
import { Outlet, Link } from "react-router-dom";


import './Homes.css'

const Home = () => {
  return (
    <Fragment>

    <div 
    className='upBannerHome'
    > 
    <h1 className='titleBanner'>{` THE VANGUARD \n TREASURE `} </h1>   

    </div>

    <div 
    className='downBannerHome'
    >
            <Link className='buttonGetOne' to="/getOne">Home</Link>
        {/* <button className='buttonGetOne'>GET ONE</button> */}
    </div>

    </Fragment>
  )
}

export default Home