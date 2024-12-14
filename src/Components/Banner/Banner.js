import React, { useEffect,useState } from 'react'
import { API_KEY,imageUrl } from '../../Constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
  const [movie, setmovie] = useState()

  const handleButtonClick = () => {
    window.location.href = 'https://www.netflix.com/in/';
  };

  useEffect(() => {
    axios.get(`discover/movie?api_key=${API_KEY}&with_original_language=ml&sort_by=popularity.desc&primary_release_year=2024`).then((response)=>{
      console.log(response.data.results[0])
      setmovie(response.data.results[7])
    })
  }, [])
  
  
  return (
    
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : " "}</h1>
            <div className='banner_buttons'>
                <button onClick={handleButtonClick} className='button'>Play</button>
                <button onClick={handleButtonClick} className='button'>My list</button>
            </div>
        <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
