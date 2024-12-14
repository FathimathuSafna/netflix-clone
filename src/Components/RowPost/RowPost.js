import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import { imageUrl,API_KEY } from '../../Constants/constants'
import './RowPost.css'
import axios from '../../axios'
import {  toast } from 'react-toastify';


function RowPost(props) {
  const [movies, setmovies] = useState([])
  const [UrlId,setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data);
      setmovies(response.data.results)
    }).catch(err=>{
      toast.error('Trailer not found')
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
const handleMovie = (id)=>{
 console.log(id);
 axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en`).then(response=>{
  if(response.data.results.length!==0){
    setUrlId(response.data.results[0])
  } else {
    console.log('Array empty');
    
  }
 }).catch(err=>{
  console.log(err);
  
 })
}
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies
        .filter((obj) => obj&& obj.backdrop_path)
        .filter((obj) => obj.id !== 1134686 && obj.id !== 1222361)
        .map((obj)=>
              <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" /> 
        )}

      </div>
     { UrlId && <Youtube videoId= {UrlId.key} opts={opts} /> }
    </div>
  )
}

export default RowPost
