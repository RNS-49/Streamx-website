import React, { useState } from 'react'
import {  Link } from 'react-router-dom'
import './navbar.css'
import axios from '../../axios'
import { api_key, image_base_url } from '../../Api'
import { useEffect } from 'react'
import logo from './NavbarImages/logo.png'



function Navbar() {

  const num = Math.floor(Math.random() * 20) + 1;
  const [movie, setMovie] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    axios.get(`/trending/movie/week?api_key=${api_key}&language=en-US`).then((Response) => {
      console.log(Response.data.results)
      setMovie(Response.data.results[num] || [])
    })
  }, [])


  return (

    <div>

      <section >
        <div className="nav-section  navbar-expand-lg container-fluid">
          <nav class="navbar ">
            <img className='logo' src={logo} alt="" />

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""><i class="fa-solid fa-circle-user"></i></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">


              
              <h6 className='nav-items'>Home</h6>
              <h6 className='nav-items'>Movies</h6>
              <h6 className='nav-items'>TV shows</h6>

              <h6 className="drop-menu dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Catogories
              </h6>


              <ol className="dropdown-menu nav-items">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Science-fiction</a></li>
                <li><a className="dropdown-item" href="#">Romance</a></li>
                <li><a className="dropdown-item" href="#">Drama</a></li>
                <li><a className="dropdown-item" href="#">Thriller</a></li>
                <li><a className="dropdown-item" href="#">Others</a></li>
              </ol>

              <div className='nav-btn'>
               
              <Link to='/Subscription'> <button className='nav-btn btn btn-dark'> Subscription plans</button></Link> 
                
                
              <Link to='/LoginPage'> <button className='nav-btn btn btn-dark '>Login</button> </Link>
                
              </div>


            </div>
          </nav>
        </div>

      </section>

      <section className='search-bar' style={{ backgroundImage: `url(${movie ? image_base_url + movie.backdrop_path : ""})` }}>
        <div>
          <h1 className='search-head'>Watch movies, TV shows and more</h1>
          <h6 className='search-head-sub'>Watch you favorite shows anywhere anytime</h6>
          <input id='search' type="text" placeholder='Search for Movies,Tv shows & Others' />
        </div>
      </section>

    </div>

  )
}

export default Navbar
