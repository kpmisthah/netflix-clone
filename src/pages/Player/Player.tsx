import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  interface VideoData {
    name: string;
    key: string;
    published_at: string;
    type: string;
  }

  const{id} = useParams()
  const navigate = useNavigate()
  const[apiData,setApiData] = useState<VideoData>({
    name:'',
    key:'',
    published_at:'',
    type:''
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODk5ODcxOWEyMzk0Mjc0N2M0NTAxMjczYjRkZWM4ZSIsIm5iZiI6MTcyNjAxNTUxNS42NTY5OTk4LCJzdWIiOiI2NmUwZTgxYjAwMDAwMDAwMDA0YzgwMWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ucJVEs9s6e7UiXjkkkFeKxJyrs3M8vtp3EYwr4dE1NA'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
  return (
    <div className='player'>
      <img src={back_arrow_icon} onClick={()=>{navigate(-1)}}/>
      <iframe width='90%' height="90%" src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}
export default Player

