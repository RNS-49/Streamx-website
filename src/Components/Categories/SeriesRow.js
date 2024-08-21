import React,{useState} from 'react'
import './categories.css'
import axios from '../../axios'
import { useEffect } from 'react'
import { api_key } from '../../Api'
import { image_base_url } from '../../Api'


function SeriesRow() {

  
  const [movie, setMovie] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    axios.get(`/discover/tv?api_key=${api_key}&with_networks=213`).then((Response) => {
      console.log(Response.data.results)
      setMovie(Response.data.results)
    })
  }, [])


  const handleWatchNow = (movieId) => {
    // Redirect to the movie's detail page or a streaming service
    window.location.href = /amazon.com/`${movieId}`;  // Replace this with the actual link or route
  };

  const handleTrailer = (movieId) => {
    // Fetch the trailer using the movie ID
    axios.get(`/tv/${movieId}/videos?api_key=${api_key}`).then((response) => {
        const trailer = response.data.results.find(
          (video) => video.type === 'Trailer' && video.site === 'YouTube'
        );
        if (trailer) {
          window.open(`https://www.youtube.com/watch?v=${trailer.key}, '_blank'`);
        } else {
          alert('Trailer not available');
        }
      })
      .catch((error) => {
        console.error('Error fetching trailer', error);
        alert('Error fetching trailer');
      });
  };




  return (
    <div>

     <div className='head_1'>
      <h1>Watch Your Favorite Shows</h1>
    </div>
     
   
    <div className="card-carousel">
        {movie.map((movie) => (
          <div className="card" key={movie.id}>
            <img
              className="series"
              src={`${image_base_url}${movie.poster_path}`}
              alt={movie.name}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{movie.name}</h5>
              <i class="fa-brands fa-imdb"></i><h6 className='rating'>{parseFloat(movie.vote_average).toFixed(2)}/10</h6>
              <button
                className="btn btn-danger m-1"
                onClick={() => handleWatchNow(movie.id)}
              >
                Watch Now
              </button>
              <button
                className="btn btn-secondary m-1"
                onClick={() => handleTrailer(movie.id)}
              >
                Trailer
              </button>
            </div>
          </div>
        ))}
      </div>


  </div>
    
  )
}

export default SeriesRow
